/**
 * MidiDevice class and utility module.
 * @module midi-device
 * @author Jason Banfield <developer@dmxify.com>
 * @license MIT
 */

/**
 * @class MidiDevice
 * @property {number} id - MidiDevice id
 * @property {string} name - MidiDevice name
 * @property {string} manufacturer - MidiDevice manufacturer
 * @property {string} imagePath - Image path (Work in progress)
 * @property {array} midiDeviceControls - Array of MidiDeviceControl objects configured for this MidiDevice
 */


const unescapePeriod = function(str) {
  str.replace('&period;', '.');
  return str;
}


const MidiDeviceOptions = class {
  constructor({
    imagePath = "",
    enabled = true
  } = {
    imagePath: "",
    enabled: true
  }) {
    this.imagePath = imagePath;
    this.enabled = !!enabled;
  }

  getEnabled() {
    return this.enabled;
  }
  setEnabled(val) {
    this.enabled = !!val;
  }

  getImagePath() {
    return this.imagePath;
  }
  setImagePath(val) {
    this.imagePath = val
  }
}

const MidiDevice = class {
  constructor({
    id = null,
    name = 'New Midi Device',
    manufacturer = 'Generic',
    midiDeviceControls = [],
    options = {
      "imagePath": "",
      "enabled": true
    }
  } = {
    id: null,
    name: 'New Midi Device',
    manufacturer: 'Generic',
    midiDeviceControls: [],
    options: {
      "imagePath": "",
      "enabled": true
    }
  }) {
    this._id = id;
    this._name = unescapePeriod(name);
    this._manufacturer = unescapePeriod(manufacturer);
    this._midiDeviceControls = midiDeviceControls;
    this._options = new MidiDeviceOptions(options);
  }

  get id() {
    return this._id;
  }
  set id(val) {
    this._id = val;
  }

  get name() {
    return this._name;
  }
  set name(val) {
    this._name = unescapePeriod(val);
  }

  get manufacturer() {
    return this._manufacturer;
  }
  set manufacturer(val) {
    this._manufacturer = unescapePeriod(val);
  }

  get midiDeviceControls() {
    return this._midiDeviceControls;
  }
  set midiDeviceControls(val) {
    this._midiDeviceControls = val;
  }

  get options() {
    return this._options;
  }

  set options(val) {
    this._options = val;
  }

  /**
   * Add a MidiDeviceControl to this MidiDevice
   * @param {MidiDeviceControl} - MidiDeviceControl to add.
   * @returns {array} - Array of MidiDeviceControls in this MidiDevice instance
   */
  addMidiDeviceControl(midiDeviceControl) {
    this._midiDeviceControls.push(midiDeviceControl);
  }

  deleteMidiDeviceControl(id) {
    for (var i = 0; i < this._midiDeviceControls.length; i++) {
      if (this._midiDeviceControls[i]._id == id) {
        this._midiDeviceControls.splice(i, 1);
      }
    }
  }


  nextAvailableControlId() {
    return Math.max(...this._midiDeviceControls.map(o => o.id), 0) + 1;
  }

  numOfControlType(type) {
    return this._midiDeviceControls.filter((o) => o.type === type).length;
  }

  static hasControlWithBindingsOf(midiDevice, controlType, midiMessageData) {
    // for each MidiDeviceControl in this MidiDevice
    if (!midiDevice.midiDeviceControls) {
      return false;
    }
    for (let control of midiDevice.midiDeviceControls) {
      // iterate through midiMessageBindings. (format: [channel,note,value])
      for (let binding of control._midiMessageBindings) {
        switch (control._type) {
          case 'BUTTON':
            // compare channel, note & value
            if (midiMessageData[0] == binding[0] && midiMessageData[1] == binding[1] && midiMessageData[2] == binding[2]) {
              return true;
            }
            break;
          case 'FADER':
            // compare channel and note
            if (midiMessageData[0] == binding[0] && midiMessageData[1] == binding[1]) {
              return true;
            }
            break;
          default:
            break;
        } // end switch
      } // end for
    } // end for
    return false;
  }

} // end class

module.exports = MidiDevice;
