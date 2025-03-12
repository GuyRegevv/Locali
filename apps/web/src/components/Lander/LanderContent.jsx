import LanderMainContent from "./LanderMainContent";
import LanderSearchForm from "./LanderSearchForm";

export default function LanderContent() {
  return (
    <div className="flex w-full p-6">
      {/* Left section - Main content */}
      <LanderMainContent />

      {/* Right section - Search form */}
      <LanderSearchForm />
    </div>
  );
}
