import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Edit2,
  Home,
  Calendar as CalendarIcon,
  Map,
} from "lucide-react";
import { useNavigate } from "react-router";

export default function CalendarScreen() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(17);
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(7); // 0-11 (August = 7)
  const [currentYear, setCurrentYear] = useState(2025);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Generate calendar days dynamically based on current month and year
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const generateCalendarDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay(); // 0 = Sunday, 6 = Saturday

    // Task dates for August 2025 only
    const augustTasks = {
      1: "fertilizer",
      2: "harvest",
      8: "fertilizer",
      17: "selected",
      18: "harvest",
      26: "harvest",
    };

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push({ day: null });
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayObj = { day };

      // Add task types only for August 2025
      if (currentMonth === 7 && currentYear === 2025 && augustTasks[day]) {
        dayObj.type = augustTasks[day];
      }

      days.push(dayObj);
    }

    // Add empty cells to complete the last week
    const remainingCells = 7 - (days.length % 7);
    if (remainingCells < 7) {
      for (let i = 0; i < remainingCells; i++) {
        days.push({ day: null });
      }
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  const upcomingTasks = [
    {
      id: 1,
      title: "Apply Fertilizer to Maize",
      chip: "Maize",
      when: "Today",
      checked: false,
    },
    {
      id: 2,
      title: "Spray Pesticide on Cassava",
      chip: "Cassava",
      when: "Oct 3",
      checked: false,
    },
    {
      id: 3,
      title: "Check Irrigation System",
      chip: "All",
      when: "Oct 5",
      checked: false,
    },
  ];

  const getDayStyle = (day) => {
    if (!day.day) return "";

    if (day.type === "selected") {
      return "bg-blue-600 text-white font-semibold";
    } else if (day.type === "planting") {
      return "bg-orange-500 text-white font-semibold";
    } else if (day.type === "fertilizer") {
      return "bg-green-500 text-white font-semibold";
    } else if (day.type === "harvest") {
      return "bg-yellow-400 text-gray-900 font-semibold";
    }
    return "text-gray-700";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200">
        <h1 className="text-lg font-bold font-myFont text-dashboardheadcolor">
          Calendar
        </h1>
        <button
          onClick={() => navigate("/new-task")}
          className="text-xs font-myFont underline text-linkcolor font-medium"
        >
          Add Task
        </button>
      </div>

      {/* Date Display */}
      <div className="bg-calbgcolor px-4 py-3 flex items-center justify-between">
        <span className="text-3xl font-myFont font-semibold text-dashboardtextcolor">
          Mon, Aug 17
        </span>
        <Edit2 className="w-4 h-4 text-dashboardtextcolor" />
      </div>

      {/* Calendar Month Selector */}
      <div className="bg-calbgcolor px-4 py-2 flex items-center justify-between border-b border-gray-200">
        <button
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsCalendarExpanded(!isCalendarExpanded)}
        >
          <span className="text-sm font-medium font-myFont text-dashboardtextcolor">
            {monthNames[currentMonth]} {currentYear}
          </span>
          {isCalendarExpanded ? (
            <ChevronUp className="w-4 h-4 text-dashboardtextcolor" />
          ) : (
            <ChevronDown className="w-4 h-4 text-dashboardtextcolor" />
          )}
        </button>
        <div className="flex items-center gap-2">
          <button onClick={handlePreviousMonth}>
            <ChevronLeft className="w-4 h-4 text-dashboardtextcolor cursor-pointer" />
          </button>
          <button onClick={handleNextMonth}>
            <ChevronRight className="w-4 h-4 text-dashboardtextcolor cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      {isCalendarExpanded && (
        <div className="bg-calbgcolor px-4 py-4 mb-4">
          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {daysOfWeek.map((day, idx) => (
              <div
                key={idx}
                className="text-center text-xs font-medium text-gray-500"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((dayObj, idx) => (
              <div
                key={`day-${idx}`}
                className="flex items-center justify-center h-10"
              >
                {dayObj.day !== null && dayObj.day !== undefined ? (
                  <button
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium ${getDayStyle(
                      dayObj
                    )}`}
                    onClick={() => setSelectedDate(dayObj.day)}
                  >
                    {dayObj.day}
                  </button>
                ) : (
                  <div className="w-9 h-9"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Task Types Legend */}
      <div className="bg-white px-4 py-3 mb-4">
        <h3 className="text-sm font-semibold text-dashboardheadcolor font-myFont mb-3">
          Task Types
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs text-dashboardtextcolor font-myFont">
              Planting
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-xs text-dashboardtextcolor font-myFont">
              Fertilizer
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-xs text-dashboardtextcolor font-myFont">
              Pest Control
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <span className="text-xs text-dashboardtextcolor font-myFont">
              Harvest
            </span>
          </div>
        </div>
      </div>

      {/* Upcoming Tasks */}
      <div className="bg-white px-4 py-3 mb-20">
        <h3 className="text-sm font-semibold font-myFont text-dashboardheadcolor mb-3">
          Upcoming Tasks
        </h3>
        <div className="space-y-3">
          {upcomingTasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between">
              <div className="flex items-center flex-1">
                <div className="flex-1">
                  <p className="text-sm font-medium text-dashboardheadcolor font-myFont">
                    {task.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-flex items-center text-xs text-dashboardheadcolor">
                      <CalendarIcon className="w-3 h-3 mr-1" />
                      {task.when}
                    </span>
                    <span className="px-2 py-0.5 bg-taskbgcolor rounded-full text-xs text-dashboardheadcolor">
                      {task.chip}
                    </span>
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
                defaultChecked={task.checked}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto border-t border-gray-200 bg-white">
        <div className="grid grid-cols-3">
          <button
            onClick={() => navigate("/dashboard")}
            className="py-3 flex flex-col items-center text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="text-[11px]">Home</span>
          </button>
          <button className="py-3 flex flex-col items-center text-blue-600">
            <CalendarIcon
              className="w-5 h-5"
              onClick={() => navigate("/calendar")}
            />
            <span className="text-[11px] font-medium">Calendar</span>
          </button>
          <div className="py-3 flex flex-col items-center text-gray-500 hover:text-gray-700 transition-colors"
>
            <Map size={20} onClick={() => navigate("/crop-health")} />
            <span className="text-xs">Crop Map</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
