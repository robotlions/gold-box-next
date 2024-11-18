import * as CharFunctions from "./CharFunctions";
import * as InvFunctions from "./InventoryFunctions";
import { genders, alignments } from "./poolofradiance/PoolRadData";

export const CharAbilityDisplay = (props) => {
  return (
    <>
      <h4>Ability Scores</h4>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div>
          <div>
            Strength:
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

          <div>
            Intelligence:
            <CharFunctions.ScoreModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.intIndex}
              dataArrayIndexCurrent={props.intIndexCurrent}
            />
          </div>

          <div className="col-4">
            Wisdom:
            <CharFunctions.ScoreModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.wisIndex}
              dataArrayIndexCurrent={props.wisIndexCurrent}
            />
          </div>

          <div className="col-4">
            Dexterity:
            <CharFunctions.ScoreModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.dexIndex}
              dataArrayIndexCurrent={props.dexIndexCurrent}
            />
          </div>

          <div className="col-4">
            Constitution:
            <CharFunctions.ScoreModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.conIndex}
              dataArrayIndexCurrent={props.conIndexCurrent}
            />
          </div>

          <div className="col-4">
            Charisma:
            <CharFunctions.ScoreModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.chaIndex}
              dataArrayIndexCurrent={props.chaIndexCurrent}
            />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4 style={{ textAlign: "center" }}>Levels</h4>
        <div className="row">
          <div className="col-6">Cleric: </div>
          <div className="col-6">
            <CharFunctions.LevelModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.clericIndex}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">Fighter: </div>
          <div className="col-6">
            <CharFunctions.LevelModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.fighterIndex}
            />
          </div>
        </div>
        {props.paladinIndex && (
          <div className="row">
            <div className="col-6">Paladin: </div>
            <div className="col-6">
              <CharFunctions.LevelModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.paladinIndex}
              />
            </div>
          </div>
        )}
        {props.rangerIndex && (
          <div className="row">
            <div className="col-6">Ranger: </div>
            <div className="col-6">
              <CharFunctions.LevelModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.rangerIndex}
              />
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-6">Magic-User: </div>
          <div className="col-6">
            <CharFunctions.LevelModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.magicUserIndex}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">Thief: </div>
          <div className="col-6">
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
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 ">
        <div>
          Character Name:{" "}
          <CharFunctions.NameModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
          />
        </div>
        <div>
          Max HP:{" "}
          <CharFunctions.HitPointModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            dataArrayIndex={props.maxHPIndex}
          />
        </div>
        <div>
          Current HP:{" "}
          <CharFunctions.HitPointModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            dataArrayIndex={props.currentHPIndex}
          />
        </div>
        <div className="col-md-3">
          Experience:{" "}
          <CharFunctions.ExperienceModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            dataArrayIndex={props.experienceIndex}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
        <div>
          Class:{" "}
          <CharFunctions.SelectModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            index={props.classIndex}
            dataList={props.classList}
          />
        </div>
        <div>
          Alignment:{" "}
          <CharFunctions.SelectModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            index={props.alignmentIndex}
            dataList={alignments}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 ">
        <div>
          Status:{" "}
          <CharFunctions.SelectModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            index={props.statusIndex}
            dataList={props.statusCodes}
          />
        </div>

        <div>
          Race:{" "}
          <CharFunctions.SelectModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            index={props.raceIndex}
            dataList={props.racesList}
          />
        </div>
        <div>
          Gender:{" "}
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
      <div className="row">
        <div className="col-md-3">
          Copper:{" "}
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.copperIndex}
          />
        </div>
        <div className="col-md-3">
          Silver:{" "}
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.silverIndex}
          />
        </div>
        <div className="col-md-3">
          Electrum:{" "}
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.electrumIndex}
          />
        </div>
        <div className="col-md-3">
          Gold:{" "}
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.goldIndex}
          />
        </div>
        <div className="col-md-3">
          Platinum:{" "}
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.platinumIndex}
          />
        </div>
        <div className="col-md-3">
          Gems:{" "}
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.gemsIndex}
          />
        </div>
        <div className="col-md-3">
          Jewelry:{" "}
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
      <div className="row" style={{ textAlign: "center", marginBottom: 20 }}>
        <em>
          These values are auto-generated by the gold box engine based on the
          original AD&D tables. Although you can edit these, the game will
          automatically reset them on load.
        </em>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-8">Paralyzation, Poison, Death Magic</div>
            <div className="col-4">
              <CharFunctions.ValueModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.deathSaveIndex}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-8">Petrification and Polymorph</div>
            <div className="col-4">
              <CharFunctions.ValueModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.petriPolySaveIndex}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-8">Rod, Staff, Wand</div>
            <div className="col-4">
              <CharFunctions.ValueModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.rodStaffWandSaveIndex}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-8">Breath Weapon</div>
            <div className="col-4">
              <CharFunctions.ValueModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.breathWeaponSaveIndex}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-8">Spell</div>
            <div className="col-4">
              <CharFunctions.ValueModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.spellSaveIndex}
              />
            </div>
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
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-8">Pick Pockets</div>
            <div className="col-4">
              <CharFunctions.ValueModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.pickPocketsIndex}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-8">Open Locks</div>
            <div className="col-4">
              <CharFunctions.ValueModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.openLocksIndex}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-8">Find/Remove Traps</div>
            <div className="col-4">
              <CharFunctions.ValueModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.findTrapsIndex}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-8">Move Silently</div>
            <div className="col-4">
              <CharFunctions.ValueModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.moveSilentlyIndex}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-8">Hide in Shadows</div>
            <div className="col-4">
              <CharFunctions.ValueModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.hideInShadowsIndex}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-8">Hear Noise</div>
            <div className="col-4">
              <CharFunctions.ValueModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.hearNoiseIndex}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-8">Climb Walls</div>
            <div className="col-4">
              <CharFunctions.ValueModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.climbWallsIndex}
              />
            </div>
          </div>
          <div className="row">
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
      </div>
    </>
  );
};
