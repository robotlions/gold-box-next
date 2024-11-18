import * as CharFunctions from "./CharFunctions";
import * as InvFunctions from "./InventoryFunctions";
import { genders, alignments } from "./poolofradiance/PoolRadData";

export const CharAbilityDisplay = (props) => {
  return (
    <>
      <h4>Ability Scores</h4>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <div>Strength:</div>
            <div>
              <CharFunctions.StrengthModule
                idText="strengthScore"
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                extStrIndex={props.extStrIndex}
                extStrIndexCurrent={props.extStrIndexCurrent}
                dataArrayIndex={props.strIndex}
                dataArrayIndexCurrent={props.strIndexCurrent}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <div>Intelligence:</div>
            <div>
              <CharFunctions.ScoreModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.intIndex}
                dataArrayIndexCurrent={props.intIndexCurrent}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <div>Wisdom:</div>
            <div>
              <CharFunctions.ScoreModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.wisIndex}
                dataArrayIndexCurrent={props.wisIndexCurrent}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <div>Dexterity:</div>
            <div>
              <CharFunctions.ScoreModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.dexIndex}
                dataArrayIndexCurrent={props.dexIndexCurrent}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <div>Constitution:</div>
            <div>
              <CharFunctions.ScoreModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.conIndex}
                dataArrayIndexCurrent={props.conIndexCurrent}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <div>Charisma:</div>
            <div>
              <CharFunctions.ScoreModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.chaIndex}
                dataArrayIndexCurrent={props.chaIndexCurrent}
              />
            </div>
          </div>
        </div>
      </div>
      <h4 style={{ textAlign: "center" }}>Levels</h4>
      {/* <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-4"> */}
      <div className="flex gap-4">
        <div>
          <div className="text-center">Cleric: </div>
          <div>
            <CharFunctions.LevelModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.clericIndex}
            />
          </div>
        </div>
        <div>
          <div className="text-center">Fighter: </div>
          <div>
            <CharFunctions.LevelModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.fighterIndex}
            />
          </div>
        </div>
        {props.paladinIndex && (
          <div>
            <div className="text-center">Paladin: </div>
            <div>
              <CharFunctions.LevelModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.paladinIndex}
              />
            </div>
          </div>
        )}
        {props.rangerIndex && (
          <div>
            <div className="text-center">Ranger: </div>
            <div>
              <CharFunctions.LevelModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.rangerIndex}
              />
            </div>
          </div>
        )}
        <div>
          <div className="text-center">Magic-User: </div>
          <div>
            <CharFunctions.LevelModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.magicUserIndex}
            />
          </div>
        </div>
        <div>
          <div className="text-center">Thief: </div>
          <div>
            <CharFunctions.LevelModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.thiefIndex}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const CharInfoDisplay = (props) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div>Character Name</div>
          <CharFunctions.NameModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div>Max HP:</div>
          <CharFunctions.HitPointModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            dataArrayIndex={props.maxHPIndex}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div>Current HP:</div>
          <CharFunctions.HitPointModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            dataArrayIndex={props.currentHPIndex}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div>Experience:</div>
          <CharFunctions.ExperienceModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            dataArrayIndex={props.experienceIndex}
          />
        </div>
      
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div>Class:</div>
          <CharFunctions.SelectModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            index={props.classIndex}
            dataList={props.classList}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div>Alignment:</div>
          <CharFunctions.SelectModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            index={props.alignmentIndex}
            dataList={alignments}
          />
        </div>
     
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div>Status:</div>
          <CharFunctions.SelectModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            index={props.statusIndex}
            dataList={props.statusCodes}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div>Race:</div>
          <CharFunctions.SelectModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            index={props.raceIndex}
            dataList={props.racesList}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div>Gender:</div>
          <CharFunctions.SelectModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            index={props.genderIndex}
            dataList={genders}
          />
        </div>
        </div>
    </>
  );
};

export const CharMoneyComponent = (props) => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div>Copper:</div>
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.copperIndex}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">

          <div>Silver:</div>
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.silverIndex}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">

          <div>Electrum:</div>
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.electrumIndex}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">

          <div>Gold:</div>
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.goldIndex}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">

          <div>Platinum:</div>
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.platinumIndex}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">

          <div>Gems:</div>
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.gemsIndex}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">

          <div>Jewelry:</div>
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.jewelryIndex}
          />
        </div>
      </div>
    </>
  );
};

export const CharSavesDisplay = (props) => {
  return (
    <>
      <div className="text-center mb-10">
        <em>
          These values are auto-generated by the gold box engine based on the
          original AD&D tables. Although you can edit these, the game will
          automatically reset them on load.
        </em>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
            <div className="col-8">Paralyzation, Poison, Death Magic</div>

            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.deathSaveIndex}
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
            <div>Petrification and Polymorph</div>

            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.petriPolySaveIndex}
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
            <div>Rod, Staff, Wand</div>

            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.rodStaffWandSaveIndex}
            />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
            <div>Breath Weapon</div>

            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.breathWeaponSaveIndex}
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
            <div>Spell</div>

            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.spellSaveIndex}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const ThiefSkillsDisplay = (props) => {
  return (
    <>
      <div className="row" style={{ textAlign: "center", marginBottom: 20 }}>
        <em>
          These values are auto-generated by the gold box engine based on the
          original AD&D tables. Although you can edit these, the game will
          automatically reset them on load.
        </em>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <div>Pick Pockets</div>
          <div>
            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.pickPocketsIndex}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <div className="col-8">Open Locks</div>
          <div className="col-4">
            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.openLocksIndex}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <div className="col-8">Find/Remove Traps</div>
          <div className="col-4">
            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.findTrapsIndex}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <div className="col-8">Move Silently</div>
          <div className="col-4">
            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.moveSilentlyIndex}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <div className="col-8">Hide in Shadows</div>
          <div className="col-4">
            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.hideInShadowsIndex}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <div className="col-8">Hear Noise</div>
          <div className="col-4">
            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.hearNoiseIndex}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <div className="col-8">Climb Walls</div>
          <div className="col-4">
            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.climbWallsIndex}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <div className="col-8">Read Languages</div>
          <div className="col-4">
            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.readLanguagesIndex}
            />
          </div>
        </div>
      </div>
    </>
  );
};
