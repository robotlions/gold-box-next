'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as CharComponents from "../CharComponents";
import {
  azureRaces,
  azureSpellList,
  azureStatusCodes,
  azureClassList,
} from "../azurebonds/AzureData";
import * as CharFunctions from "../CharFunctions";
import AzureInventory from "./AzureInventory";
import azureBanner from "../../../public/images/azureBannerCropped.png";
import podCoverImage from "../../../public/images/pod800.jpg";
import azureCoverImage from "../../../public/images/azure800.jpg";
import silverBladesCoverImage from "../../../public/images/silverBlades800.jpg";
import poolRadCoverImage from "../../../public/images/poolRadCover800.jpg";
import { AccordionCustom } from "../CharFunctions";


export default function AzureBonds(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dataArray, setDataArray] = useState(null);
  const [inventoryLoaded, setInventoryLoaded] = useState(false);


  function exportSaveFile() {
    if (!selectedFile) {
      return alert("Please load a character file");
    } else {
      const blob = new Blob([dataArray], { type: "application/octet-stream" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = selectedFile.name;
      link.href = url;
      link.click();
    }
  }

  function loadFile(file) {
    if (document.querySelector("#fileSelect").value === "") {
      alert("No file selected");
      return;
    }

    var reader = new FileReader();
    reader.onload = function (e) {
      let data = e.target.result;
      if (data.byteLength !== 422) {
        return alert(
          "This doesn't appear to be a save file from Curse of the Azure Bonds"
        );
      } else {
        let dataArray = new Uint8Array(data);
        console.log(dataArray);
        setDataArray(dataArray);
      }
    };
    reader.onerror = function (e) {
      console.log("Error : " + e.type);
    };
    reader.readAsArrayBuffer(file);
  }

  function MagicDisplay(props) {
    let spellArray = [0];

    if (props.magicFilter === "Mage") {
      spellArray = [0, 1, 2, 3, 4];
    }
    if (props.magicFilter === "Cleric") {
      spellArray = [0, 1, 2, 3];
    }

    let spellSlots = spellArray.map((item, index) => (
      <div key={index} className="col-2">
        {item + 1}:{" "}
        <CharFunctions.LevelModule
          dataArray={dataArray}
          setDataArray={setDataArray}
          dataArrayIndex={props.startingIndex + item}
        />
      </div>
    ));

    return (
      <>
        {spellSlots}
        <h4>{props.magicFilter} Spells:</h4>{" "}
        <div>
          <CharFunctions.SpellModule
            dataArray={dataArray}
            setDataArray={setDataArray}
            dataArrayMin={121}
            dataArrayMax={220}
            dataList={azureSpellList}
            filter={props.magicFilter}
          />
        </div>
      </>
    );
  }

  function CharAbilityDisplay() {
    return (
      <CharComponents.CharAbilityDisplay
        dataArray={dataArray}
        setDataArray={setDataArray}
        strIndex={16}
        strIndexCurrent={17}
        extStrIndex={28}
        extStrIndexCurrent={29}
        intIndex={18}
        intIndexCurrent={19}
        wisIndex={20}
        wisIndexCurrent={21}
        dexIndex={22}
        dexIndexCurrent={23}
        conIndex={24}
        conIndexCurrent={25}
        chaIndex={26}
        chaIndexCurrent={27}
        clericIndex={265}
        fighterIndex={267}
        paladinIndex={268}
        rangerIndex={269}
        magicUserIndex={270}
        thiefIndex={271}
      />
    );
  }

  function CharInfoDisplay() {
    return (
      <CharComponents.CharInfoDisplay
        dataArray={dataArray}
        setDataArray={setDataArray}
        maxHPIndex={120}
        currentHPIndex={420}
        experienceIndex={295}
        statusIndex={405}
        statusCodes={azureStatusCodes}
        racesList={azureRaces}
        raceIndex={116}
        genderIndex={281}
        alignmentIndex={283}
        classIndex={117}
        classList={azureClassList}
      />
    );
  }

  function CharSavesDisplay() {
    return (
      <CharComponents.CharSavesDisplay
        dataArray={dataArray}
        setDataArray={setDataArray}
        deathSaveIndex={223}
        petriPolySaveIndex={224}
        rodStaffWandSaveIndex={225}
        breathWeaponSaveIndex={226}
        spellSaveIndex={227}
      />
    );
  }

  function MoneyDisplay() {
    return (
      <CharComponents.CharMoneyComponent
        dataArray={dataArray}
        setDataArray={setDataArray}
        copperIndex={251}
        silverIndex={253}
        electrumIndex={255}
        goldIndex={257}
        platinumIndex={259}
        gemsIndex={261}
        jewelryIndex={263}
      />
    );
  }

  function ThiefSkillsDisplay() {
    return (
      <CharComponents.ThiefSkillsDisplay
        dataArray={dataArray}
        setDataArray={setDataArray}
        pickPocketsIndex={234}
        openLocksIndex={235}
        findTrapsIndex={236}
        moveSilentlyIndex={237}
        hideInShadowsIndex={238}
        hearNoiseIndex={239}
        climbWallsIndex={240}
        readLanguagesIndex={241}

      />
    );
  }

  let splashImage = dataArray || inventoryLoaded===true ? null : (
    <>
    <h5 style={{marginBottom:20}}>To begin, upload a character file (.SAV) or an inventory file (.SWG) from <em>Curse of the Azure Bonds</em>.</h5>    
   
    <h6>Need somewhere to start? Try the <em>Curse of the Azure Bonds</em> <a href={"/files/azureDefaultCharacters.zip"}>default characters</a>.</h6>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center md:mx-10">
          <Image
          className="opacity-50 hover:scale-110"
            src={poolRadCoverImage}
            alt="pool of radiance"
            height={400}
            style={{ width: "auto" }}
          />
          <Link href="/azurebonds">
            <Image
              src={azureCoverImage}
              
              alt="curse of the azure bonds"
              height={400}
              style={{ width: "auto" }}
            />
          </Link>
          <Link href="/silverblades">
            <Image
              src={silverBladesCoverImage}
              className="opacity-50 hover:scale-110"
              alt="secret of the silver blades"
              height={400}
              style={{ width: "auto" }}
            />
          </Link>
          <Link href="/poolsofdarkness">
            <Image
              src={podCoverImage}
              className="opacity-50 hover:scale-110"
              alt="pools of darkness"
              height={400}
              style={{ width: "auto" }}
            />
          </Link>
        </div>
    </>
  );

  const characterAccordionItems = [
    { title: "Character Info", content: <CharInfoDisplay /> },
    { title: "Ability Scores and Levels", content: <CharAbilityDisplay /> },
    { title: "Saving Throws", content: <CharSavesDisplay /> },
    { title: "Thief Skills", content: <ThiefSkillsDisplay /> },
    { title: "Money", content: <MoneyDisplay /> },
    {
      title: "Magic User Spells",
      content: <MagicDisplay magicFilter="Mage" startingIndex={181} />,
    },
    {
      title: "Cleric Spells",
      content: <MagicDisplay magicFilter="Cleric" startingIndex={178} />,
    },
  ];

  return (
    
      <div className="mb-60">
      <div className="mb-20">

        <Image className="w-full" src={azureBanner} alt="azure bonds title screen" />
        <h2 className="text-center">
          Advanced Dungeons and Dragons: Curse of the Azure Bonds
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-15 mx-5">
        <div className="w-11/12">
          <h3 className="text-center">Character Editor</h3>
          <div className="mb-3">
            <input
              className="form-control"
              type="file"
              id="fileSelect"
              accept=".sav"
              onChange={(e) => {
                // createInventoryFile(e);
                setSelectedFile(e.target.files[0]);
                loadFile(e.target.files[0]);
              }}
            />
          </div>
          {dataArray ? (
            <button
              className="btn downloadButton"
              onClick={() => exportSaveFile()}
            >
              Download Character File
            </button>
          ) : null}
          <br />
          <p></p>
          {dataArray ? (
            <>
            <AccordionCustom accordionItems={characterAccordionItems} />
 
            </>
          ) : null}
        </div>
        <div className="col-md-6">
          <h3 style={{ textAlign: "center" }}>Inventory Editor</h3>
          <AzureInventory inventoryLoaded={inventoryLoaded} setInventoryLoaded={setInventoryLoaded}/>
        </div>
      </div>
      <div
        className="row g-1 d-flex justify-content-center"
        style={{ marginTop: "5vh", textAlign: "center" }}
      >
        <div className="col-md-auto">{splashImage}</div>
      </div>
    </div>
  );
}
