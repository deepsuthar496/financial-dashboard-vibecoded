
const Feedback = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-medium text-gray-800 mb-2">Review Rating</h3>
      <h2 className="text-xl font-bold mb-6">Does our dashboard help your business?</h2>
      
      <div className="flex space-x-4">
        <button className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
          😊
        </button>
        <button className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
          😐
        </button>
      </div>
    </div>
  );
};

export default Feedback;
