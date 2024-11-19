import { useState } from "react";
import { poolRadItemValues } from "./PoolRadData";
import * as InvFunctions from "../InventoryFunctions";

export default function PoolRadInventory(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dataArray, setDataArray] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  function loadFile(file) {
    if (document.querySelector("#inventoryFileSelect").value === "") {
      alert("No file selected");
      return;
    }

    var reader = new FileReader();
    reader.onload = function (e) {
      let data = e.target.result;
      if (data.byteLength % 63 !== 0) {
        return alert(
          "This doesn't appear to be an inventory file from Pool of Radiance"
        );
      }
      let dataArray = new Uint8Array(data);
      setDataArray(dataArray);
      props.setInventoryLoaded(true);
    };
    reader.onerror = function (e) {
      console.log("Error : " + e.type);
    };
    reader.readAsArrayBuffer(file);
  }

  function ListDisplay() {
    return (
      <>
          <InvFunctions.ItemListModule
            dataArray={dataArray}
            setDataArray={setDataArray}
            dataList={poolRadItemValues}
            nameIndex={47}
            typeIndex={46}
            bonusIndex={50}
            chargeIndex={60}
            effect2Index={61}
            effect3Index={62}
            ammoIndex={57}
            weightIndex={55}
            arrayLength={63}
            editingIndex={editingIndex}
            setEditingIndex={setEditingIndex}
          />
      </>
    );
  }

  function exportSaveFile() {
    const blob = new Blob([dataArray], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = selectedFile.name;
    link.href = url;
    link.click();
  }

  return (
    <>
      <div>
        <div className="col-md">
          <div className="mb-3">
            <input
              className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

              type="file"
              id="inventoryFileSelect"
              accept=".itm"
              onChange={(e) => {
                setSelectedFile(e.target.files[0]);
                loadFile(e.target.files[0]);
              }}
            />
          </div>

          {dataArray ? (
            <div className="text-right">
            <button
              className="hover:text-white hover:bg-blue-500 hover:border-blue-500"
              onClick={() => exportSaveFile()}
            >
              Download Inventory File
            </button>
            </div>
          ) : null}
        </div>
      </div>
      <br />
        {dataArray ? <ListDisplay /> : null}
    </>
  );
}