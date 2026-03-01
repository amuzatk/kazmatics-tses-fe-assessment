// src/components/ui/QuizForm.tsx
interface QuizFormProps {
  onComplete: () => void;
}

export default function QuizForm({ onComplete }: QuizFormProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Quiz</h2>
      
      <div className="space-y-8">
        <div>
          <p className="font-medium mb-3">1. What is the purpose of React Hooks?</p>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="q1" />
              <span>To use state and other features in functional components</span>
            </label>
            {/* other options */}
          </div>
        </div>

        {/* More questions... */}

        <button
          onClick={onComplete}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
}