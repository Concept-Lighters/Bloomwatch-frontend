import React, { useState } from 'react';
import { ChevronLeft, Calendar, Clock, ChevronDown, Sprout, Droplets, Bug, Wheat } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function NewTask() {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('07:00 AM');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedTaskType, setSelectedTaskType] = useState('');
  const [notes, setNotes] = useState('');

  const crops = [
    'Maize (Corn)',
    'Cassava',
    'Yam',
    'Rice',
    'Groundnut (Peanuts)',
    'Plantain',
    'Millet',
    'Sorghum',
    'Cowpea'
  ];

  const taskTypes = [
    { id: 'planting', name: 'Planting', icon: Sprout, color: 'text-green-600', bgColor: 'bg-green-50' },
    { id: 'fertilizer', name: 'Fertilizer', icon: Droplets, color: 'text-green-600', bgColor: 'bg-green-50' },
    { id: 'pest-control', name: 'Pest Control', icon: Bug, color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { id: 'harvest', name: 'Harvest', icon: Wheat, color: 'text-yellow-600', bgColor: 'bg-yellow-50' }
  ];

  const handleCompleteTask = () => {
    const newTask = {
      taskName,
      date,
      time,
      crop: selectedCrop,
      taskType: selectedTaskType,
      notes
    };
    console.log('New Task Created:', newTask);
    navigate('/calendar');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="px-4 py-4 flex items-center border-b border-gray-100">
        <button 
          onClick={() => navigate('/calendar')}
          className="mr-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-900" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">New Task</h1>
      </div>

      {/* Form Content */}
      <div className="flex-1 px-4 py-6 overflow-y-auto">
        {/* Task Name */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Task Name
          </label>
          <input
            type="text"
            placeholder="eg. Apply fertilizer to Maize"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Date */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Date
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="mm/dd/yy"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-10"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Time */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Time
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="07:00 AM"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-10"
            />
            <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Crop */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Crop
          </label>
          <div className="relative">
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-sm text-gray-500"
            >
              <option value="">Select crop</option>
              {crops.map((crop) => (
                <option key={crop} value={crop}>
                  {crop}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Task Types */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-900 mb-4">
            Task Types
          </label>
          <div className="grid grid-cols-2 gap-4">
            {taskTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = selectedTaskType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedTaskType(type.id)}
                  className={`flex flex-col items-center justify-center py-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full ${type.bgColor} flex items-center justify-center mb-2`}>
                    <Icon className={`w-6 h-6 ${type.color}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{type.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Notes */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Notes
          </label>
          <textarea
            placeholder="Add any additional details"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm resize-none"
          />
        </div>
      </div>

      {/* Complete Task Button */}
      <div className="p-4 pb-6">
        <button
          onClick={handleCompleteTask}
          className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-4 rounded-xl transition-colors shadow-sm"
        >
          Complete Task
        </button>
      </div>
    </div>
  );
}
