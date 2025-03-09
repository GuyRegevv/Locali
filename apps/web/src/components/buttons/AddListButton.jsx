export default function AddListButton() {
  return (
    <button
      className="p-4 bg-gray-200 text-gray-600 border-none rounded-lg cursor-pointer hover:bg-gray-300"
      onClick={() => console.log("Clicked Add List Button")}
    >
      <i className="bi bi-bookmark-plus-fill" style={{ fontSize: "24px" }}></i>
    </button>
  );
}
