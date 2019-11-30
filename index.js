/**
 * MidiDevice class and utility module.
 * @module midi-device
 * @version 0.1.0
 * @author Jason Banfield <developer@dmxify.com>
 * @license MIT
 */

/**
 * @class MidiDevice
 * @property {number} id - MidiDevice id
 * @property {string} name - MidiDevice name
 * @property {string} manufacturer - MidiDevice manufacturer
 * @property {string} imagePath
 */
const MidiDevice = class {
  constructor({
    id = null,
    name = 'New Midi Device',
    manufacturer = 'Generic',
    imagePath = '',
    midiDeviceControls = {}
  } = {
    id: null,
    name: 'New Midi Device',
    manufacturer: 'Generic',
    imagePath: null,
    midiDeviceControls: {}
  }) {
    this._id = id;
    this._name = name;
    this._manufacturer = manufacturer;
    this._imagePath = imagePath;
    this._midiDeviceControls = {}
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
}

module.exports = MidiDevice;
