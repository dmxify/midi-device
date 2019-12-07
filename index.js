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

const MidiDevice = class {
  constructor({
    id = null,
    name = 'New Midi Device',
    manufacturer = 'Generic',
    imagePath = '',
    midiDeviceControls = []
  } = {
    id: null,
    name: 'New Midi Device',
    manufacturer: 'Generic',
    imagePath: '',
    midiDeviceControls: []
  }) {
    this._id = id;
    this._name = name;
    this._manufacturer = manufacturer;
    this._imagePath = imagePath;
    this._midiDeviceControls = midiDeviceControls;
    this.hasControlWithBindingOf = this.hasControlWithBindingOf.bind(this)
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
    this._name = val;
  }

  get manufacturer() {
    return this._manufacturer;
  }
  set manufacturer(val) {
    this._manufacturer = val;
  }

  get imagePath() {
    return this._imagePath;
  }
  set imagePath(val) {
    this._imagePath = val;
  }

  get midiDeviceControls() {
    return this._midiDeviceControls;
  }
  set midiDeviceControls(val) {
    this._midiDeviceControls = val;
  }

  /**
   * Add a MidiDeviceControl to this MidiDevice
   * @param {MidiDeviceControl} - MidiDeviceControl to add.
   * @returns {array} - Array of MidiDeviceControls in this MidiDevice instance
   */
  addMidiDeviceControl(midiDeviceControl) {
    this._midiDeviceControls.push(midiDeviceControl);
  }
  nextAvailableControlId() {
    return Math.max(...this._midiDeviceControls.map(o => o.id), 0) + 1;
  }

  numOfControlType(controlType) {
    return this._midiDeviceControls.filter((o) => o.controlType === controlType).length;
  }

  /**
   * Determine if this MidiDevice has a MidiDeviceControl with a specific MidiMessage binding
   * @param {object} MidiMessage - MidiMessage.values array to search for. e.g. "[10,45,127]"
   * @returns {boolean} - true if control exists, false if it doesn't exist
   */
  hasControlWithBindingOf(midiMessageData) {
    let controlType;
    // for each MidiDeviceControl in this MidiDevice
    for (let control of this._midiDeviceControls) {
      // iterate through midiMessageBindings. (format: [channel,note,value])
      for (let binding of control.midiMessageBindings) {
        switch (control.controlType) {
          case 'BUTTON':
            // compare channel, note & value
            if (midiMessageData[0] == binding[0] && midiMessageData[1] == binding[1] && midiMessageData[2] == binding[2]) {
              return true;
            }
            break;
          case 'ROTARY_OR_FADER':
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
  } // end hasControlWithBinding method


  static hasControlWithBindingsOf(midiDevice, controlType, midiMessageData) {
    // for each MidiDeviceControl in this MidiDevice
    if (!midiDevice.midiDeviceControls) {
      return false;
    }
    for (let control of midiDevice.midiDeviceControls) {
      // iterate through midiMessageBindings. (format: [channel,note,value])
      for (let binding of control.midiMessageBindings) {
        switch (control.controlType) {
          case 'BUTTON':
            // compare channel, note & value
            if (midiMessageData[0] == binding[0] && midiMessageData[1] == binding[1] && midiMessageData[2] == binding[2]) {
              return true;
            }
            break;
          case 'ROTARY_OR_FADER':
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
