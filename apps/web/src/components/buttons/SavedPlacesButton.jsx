export default function SavedPlacesButton() {
  return (
    <button
      className="p-4 bg-gray-200 text-gray-600 border-none rounded-lg cursor-pointer hover:bg-gray-300"
      onClick={() => console.log("Clicked Saved Places Button")}
    >
      <i className="bi bi-bookmark-fill" style={{ fontSize: "24px" }}></i>
    </button>
  );
}
