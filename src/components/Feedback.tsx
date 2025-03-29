
const Feedback = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
      <h3 className="font-medium text-gray-800 mb-2">Review Rating</h3>
      <h2 className="text-xl font-bold mb-2">Does our dashboard help your business?</h2>
      
      <div className="flex mt-6">
        <button className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mr-3">
          😊
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center">
          😐
        </button>
      </div>
    </div>
  );
};

export default Feedback;
