"use client";

import { useState } from "react";
import Image from "next/image";
import retroComputer from "../../../public/images/retroComputer.png";

export default function BinaryTool() {
  const [dataArray1, setDataArray1] = useState(null);
  const [dataArray2, setDataArray2] = useState(null);
  const [compareArray, setCompareArray] = useState([]);
  const [searchArray, setSearchArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function loadFile1(file) {
    // if (document.querySelector("#fileSelect").value === "") {
    //   alert("No file selected");
    //   return;
    // }

    var reader = new FileReader();
    reader.onload = function (e) {
      let data = e.target.result;

      let dataArray = new Uint8Array(data);
      setDataArray1(dataArray);
      console.log(dataArray);
    };
    reader.onerror = function (e) {
      console.log("Error : " + e.type);
    };
    reader.readAsArrayBuffer(file);
  }

  function loadFile2(file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      let data = e.target.result;
      if (parseInt(data.byteLength) !== dataArray1.length) {
        return alert("These don't seem to be the same type of files.");
      }
      let dataArray = new Uint8Array(data);
      setDataArray2(dataArray);
    };
    reader.onerror = function (e) {
      console.log("Error : " + e.type);
    };
    reader.readAsArrayBuffer(file);
  }

  function doCompare() {
    let resultsArray = [];

    let array1 = Array.from(dataArray1);
    let array2 = Array.from(dataArray2);

    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        resultsArray.push({ index: [i], a1Val: array1[i], a2Val: array2[i] });
      }
    }

    setCompareArray(resultsArray);
  }

  function doSearch() {
    let resultsArray = [];

    let array1 = Array.from(dataArray1);

    for (let i = 0; i < array1.length; i++) {
      if (parseInt(array1[i]) === parseInt(searchTerm)) {
        resultsArray.push({ index: [i], a1Val: array1[i] });
      }
    }

    setSearchArray(resultsArray);
  }

  function SearchDisplay() {
    let componentDisplay = searchArray.map((item, index) => (
      <div
        className="grid grid-cols-2 md:grid-cols-2"
        style={{ backgroundColor: index % 2 === 0 && "lightBlue" }}
        key={index}
      >
        <div>{item.index}</div>{" "}
        <div >{item.a1Val}</div>{" "}
      </div>
    ));

    return searchArray.length === 0 ? null : (
      <>
        <div className="grid grid-cols-2 md:grid-cols-2" style={{ fontWeight: "bold" }}>
          <div className="grid col-span-1">Index</div>
          <div className="grid col-span-1">File 1</div>
        </div>
        {componentDisplay}
      </>
    );
  }

  function CompareDisplay() {
    // let mainDisplay = finalArray.map((item, index) => <div key={index}>{Object.keys(item)}</div>)
    let componentDisplay = compareArray.map((item, index) => (
      <div
        className="grid grid-cols-3 md:grid-cols-3"
        style={{ backgroundColor: index % 2 === 0 && "lightGray" }}
        key={index}
      >
        <div>{item.index}</div>{" "}
        <div>{item.a1Val}</div>{" "}
        <div>{item.a2Val} </div>
      </div>
    ));

    return compareArray.length === 0 ? null : (
      <>
        <div>No. of non-matching values: {compareArray.length}</div>
        <div className="grid grid-cols-3 md:grid-cols-3" style={{ fontWeight: "bold" }}>
          <div>Index</div>
          <div>File 1</div>
          <div>File 2</div>
        </div>
        {componentDisplay}
      </>
    );
  }

  return (
    <div className="w-full">
      <div className="text-center">
      <div className="flex justify-center mt-10">
        <Image src={retroComputer} alt="retro computer" width={300}/>
        </div>
        <h2 className="mt-10 mb-10">
          Binary File Tool
        </h2>
        <em className="text-center">
          To use: load a save or inventory file. Then search that file for
          values, or load a second file to compare the two side-by-side.
        </em>
      </div>
      <br/><br/>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-items-center">
        <div className="w-10/12">
          <h5>File 1</h5>
          <input
            className="w-full file:border-solid file:border-2 file:rounded file:hover:text-white file:border-green-500 file:hover:border-solid file:py-2 file:px-2 file:hover:bg-green-500 file:bg-white  file:text-green-500 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            type="file"
            id="fileSelect1"
            onChange={(e) => {
              loadFile1(e.target.files[0]);
            }}
          />
          {dataArray1 && dataArray2 ? (
            <div className="w-10/12">
              <button className="btn btn-primary" onClick={() => doCompare()}>
                Compare files
              </button>
            </div>
          ) : null}
          <div className="row">
            <div className="col-md-6">
              {dataArray1 ? (
                <div className="input-group">
                  <button
                    className="input-group-prepend btn btn-primary"
                    onClick={() => doSearch()}
                  >
                    Search for value
                  </button>
                  <input
                    className="file:border-solid file:border-2 file:rounded file:hover:text-white file:border-green-500 file:hover:border-solid file:py-2 file:px-2 file:hover:bg-green-500 file:bg-white  file:text-green-500 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                    type="text"
                    id="searchTermInput"
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="w-10/12">
          {dataArray1 ? (
            <>
              <h5>File2</h5>
              <input
                className="w-full file:border-solid file:border-2 file:rounded file:hover:text-white file:border-green-500 file:hover:border-solid file:py-2 file:px-2 file:hover:bg-green-500 file:bg-white  file:text-green-500 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                type="file"
                id="fileSelect2"
                onChange={(e) => {
                  loadFile2(e.target.files[0]);
                }}
              />
            </>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-items-center mt-20 mb-20">
        <div className="w-10/12">
          <h3>Comparison Results</h3>
          <CompareDisplay />
        </div>
        <div className="w-10/12">
          <h3>Search Results</h3>
          <SearchDisplay />
        </div>
      </div>
    </div>
  );
}
