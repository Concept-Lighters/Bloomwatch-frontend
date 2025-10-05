import React from 'react';
import { MapPin, CloudSun, Droplets, Wind, Calendar, Home, Map, BookOpen, Sprout, ClipboardList, ChevronRight } from 'lucide-react';

// Dashboard Screen - Main Home Screen
export default function Dashboard({ userName = 'Ray', location = 'Tema, Accra', onNavigate }) {
  const upcomingTasks = [
    { id: 1, title: 'Apply Fertilizer to Maize', chip: 'Maize', when: 'Today', checked: false },
    { id: 2, title: 'Spray Pesticide on Cassava', chip: 'Cassava', when: 'Oct 3', checked: false },
    { id: 3, title: 'Check Irrigation System', chip: 'All', when: 'Oct 5', checked: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto">
      {/* Greeting */}
      <div className="bg-white px-4 pt-3 pb-4">
        <p className="text-sm text-dashboardheadcolor font-myFont">
          <span className="inline-flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Good Morning, <span className="font-semibold text-gray-900 ml-1">{userName}</span> 👋
          </span>
        </p>
      </div>

      {/* Weather Card */}
      <div className="px-4 mb-8">
        <div className="rounded-2xl bg-dashboard bg-cover bg-center p-4 relative overflow-hidden">
          <div className="flex font-myFont items-center text-dashboardtextcolor text-xs mb-3">
            <MapPin className="w-3 h-3 mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-5xl font-myFont font-bold text-headercolor mb-1">27°</div>
              <div className="text-dashboardtextcolor font-myFont text-sm mb-3">Partly Cloudy</div>
              <div className="flex items-center gap-4 text-xs font-myFont text-dashboardtextcolor">
                <span className="inline-flex items-center">
                  <Droplets className="w-3 h-3 mr-1" />
                  77%
                </span>
                <span className="inline-flex items-center">
                  <Wind className="w-3 h-3 mr-1" />
                  15km/h
                </span>
              </div>
              <div className="text-xs text-dashboardtextcolor font-myFont mt-1">Humidity &nbsp; Wind Speed</div>
            </div>
            <div className="relative w-48 h-24 flex items-center justify-center">
              <img src = "Images/misc/sun.png"/>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Prediction Banner */}
      <div className="px-4 mb-8">
        <div className="bg-weatherprecolor rounded-lg p-3 border border-gray-200">
          <h3 className="text-xs font-semibold font-myFont text-weatherpretextcolor mb-1">Today's Weather Prediction</h3>
          <p className="text-xs font-myFont text-weatherpretextcolor2">It's going to rain all day</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mb-8">
        <h3 className="text-sm font-semibold font-myFonttext-dashboardheadcolor mb-4">Quick Actions</h3>
        <div className="grid grid-cols-4 gap-2">
          <button className="flex flex-col items-center py-3 rounded-lg bg-white">
            <div className="w-10 h-10 bg-actioncolor1 rounded-lg flex items-center justify-center mb-2">
              <ClipboardList className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-[10px] text-gray-700 text-center leading-tight">Community<br/>Report</span>
          </button>
          <button className="flex flex-col items-center py-3 rounded-lg bg-white">
            <div className="w-10 h-10 bg-actioncolor2 rounded-lg flex items-center justify-center mb-2">
              <Sprout className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-[10px] text-gray-700 text-center leading-tight">Crop Health<br/>Map</span>
          </button>
          <button className="flex flex-col items-center py-3 rounded-lg bg-white">
            <div className="w-10 h-10 bg-actioncolor3 rounded-lg flex items-center justify-center mb-2">
              <BookOpen className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-[10px] text-gray-700 text-center leading-tight">Advisory<br/>Library</span>
          </button>
          <button className="flex flex-col items-center py-3 rounded-lg bg-white">
            <div className="w-10 h-10 bg-actioncolor4 rounded-lg flex items-center justify-center mb-2">
              <Map className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-[10px] text-gray-700 text-center leading-tight">Market<br/>Prices</span>
          </button>
        </div>
      </div>

      {/* Urgent Alerts */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-900">Urgent Alerts</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl overflow-hidden border border-gray-200 cursor-pointer hover:shadow-md transition-shadow">
            <div className="relative h-28 bg-green-100">
              <img 
                alt="Fall Armyworm" 
                className="w-full h-full object-cover" 
                src="Images/misc/maize.jpg" 
              />
              <span className="absolute top-2 right-2 text-xs bg-callcardbgcolor px-2 py-0.5 rounded-full text-callcardcolor border border-callcardbdcolor font-myFont font-semibold">Alert</span>
            </div>
            <div className="p-2 bg-white">
              <p className="text-sm font-myFont font-semibold text-headercolor">Fall Armyworm Alert</p>
              <p className="text-xs font-myFont text-textcolor">Check your maize fields</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-200 cursor-pointer hover:shadow-md transition-shadow">
            <div className="relative h-28 bg-blue-100">
              <img 
                alt="Heavy Rainfall" 
                className="w-full h-full object-cover" 
                src="Images/misc/ricefarm.jpg" 
              />
              <span className="absolute top-2 right-2 text-xs bg-callcardbgcolor px-2 py-0.5 rounded-full text-callcardcolor border border-callcardbdcolor font-myFont font-semibold">Alert</span>
            </div>
            <div className="p-2 bg-white">
              <p className="text-sm font-myFont font-semibold text-headercolor">Heavy Rainfall Expected</p>
              <p className="text-xs font-myFont text-textcolor">Expected in next 48 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Tasks */}
      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-myFont font-semibold text-dashboardheadcolor">Upcoming Tasks</h3>
          <button className="text-sm font-myFont text-linkcolor underline hover:text-indigo-700">View All</button>
        </div>
        <div className="space-y-2">
          {upcomingTasks.map(task => (
            <div key={task.id} className="flex items-center justify-between p-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
              <div>
                <p className="text-sm font-medium text-dashboardheadcolor font-myFont">{task.title}</p>
                <div className="flex items-center gap-2 text-xs text-gray-600 mt-0.5">
                  <span className="inline-flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    {task.when}
                  </span>
                  <span className="px-2 py-0.5 bg-taskbgcolor rounded-full text-dashboardheadcolor font-myFont">{task.chip}</span>
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

      {/* Community Updates */}
      <div className="px-4 mb-24">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-semibold font-myFont text-dashboardheadcolor">Community Updates</h3>
          <button className="text-sm font-myFont text-linkcolor underline hover:text-indigo-700">See All</button>
        </div>
        <div className="space-y-3">
          <div className="flex gap-3 p-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors cursor-pointer">
            <img 
              className="w-32 h-16 rounded-lg object-cover" 
              alt="Update" 
              src="Images/misc/card1.png" 
            />
            <div className="flex-1">
              <p className="text-sm font-semibold text-dashboardheadcolor font-myFont">
                Kwame Danquah · <span className="text-xs text-dashboardheadcolor font-myFont font-normal">2h ago</span>
              </p>
              <p className="text-xs text-dashboardtextcolor font-myFont">Aphids on maize leaves</p>
              <p className="text-xs text-dashboardheadcolor font-myFont flex items-center mt-1">
                <MapPin className="w-3 h-3 mr-1" />
                Kumasi
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors cursor-pointer">
            <img 
              className="w-32 h-16 rounded-lg object-cover" 
              alt="Update" 
              src="Images/misc/card2.png" 
            />
            <div className="flex-1">
              <p className="text-sm font-semibold text-dashboardheadcolor font-myFont">
                Ama Bababra · <span className="text-xs text-dashboardheadcolor font-myFont font-normal">5h ago</span>
              </p>
              <p className="text-xs text-dashboardtextcolor font-myFont">Early harvest success</p>
              <p className="text-xs text-dashboardheadcolor font-myFont flex items-center mt-1">
                <MapPin className="w-3 h-3 mr-1" />
                Accra
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto border-t border-gray-200 bg-white">
        <div className="grid grid-cols-3">
          <button className="py-3 flex flex-col items-center text-dashboardheadcolor">
            <Home className="w-5 h-5" />
            <span className="text-[11px] font-medium">Home</span>
          </button>
          <button 
            onClick={() => onNavigate && onNavigate('calendar')}
            className="py-3 flex flex-col items-center text-gray-500 hover:text-dashboardheadcolor transition-colors"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-[11px]">Calendar</span>
          </button>
          <button 
            onClick={() => onNavigate && onNavigate('cropMap')}
            className="py-3 flex flex-col items-center text-gray-500 hover:text-dashboardheadcolor transition-colors"
          >
            <Map className="w-5 h-5" />
            <span className="text-[11px]">Crop Map</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
