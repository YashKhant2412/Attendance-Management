import axios from "axios";

//App is a react Function base Component.
const App = () => {
  const handleDownload = async () => {
    try {
      // Step 1: Fetch data from the server
      const res = await axios.get("http://localhost:8080/getFileBinaryData");

      // Step 2: Check if the response status is 200 (OK) and data is present
      if (res.status === 200 && res.data) {
        // Step 3: Extract binary data from the response and convert it to an ArrayBuffer
        const binaryDataBuffer = res.data.image.data;
        const bufferArray = new Uint8Array(binaryDataBuffer).buffer;

        // Step 4: Create a Blob from the ArrayBuffer, specifying the file type (MIME type)
        const blob = new Blob([bufferArray], {
          type: "image/jpeg", // Specify the MIME type of the file
        });

        // Step 5: Create a download link for the Blob
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;

        // Step 6: Set the download attribute and trigger the download
        a.download = "demo.jpg";
        document.body.appendChild(a);
        a.click();

        // Step 7: Clean up the temporary URL
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } else {
        // Step 2 (Error): Handle the case where the response status is not 200 or data is not present
        alert("Something went wrong!");
      }
    } catch (error) {
      // Step 2 (Error): Handle any other errors that may occur during processing
      alert("Something went wrong");
    }
  };

  return (
    <div>
      {/* Step 8: Render a button to trigger the download */}
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default App;
