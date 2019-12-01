<a name="module_midi-device"></a>

## midi-device
MidiDevice class and utility module.

**Version**: 0.1.0  
**Author**: Jason Banfield <developer@dmxify.com>  
**License**: MIT  

* [midi-device](#module_midi-device)
    * [~MidiDevice](#module_midi-device..MidiDevice)
        * [.addMidiDeviceControl(midiDeviceControl)](#module_midi-device..MidiDevice+addMidiDeviceControl) ⇒ <code>array</code>
        * [.hasControlWithBindingOf(MidiMessage)](#module_midi-device..MidiDevice+hasControlWithBindingOf) ⇒ <code>boolean</code>

<a name="module_midi-device..MidiDevice"></a>

### midi-device~MidiDevice
**Kind**: inner class of [<code>midi-device</code>](#module_midi-device)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | MidiDevice id |
| name | <code>string</code> | MidiDevice name |
| manufacturer | <code>string</code> | MidiDevice manufacturer |
| imagePath | <code>string</code> | Image path to |
| midiDeviceControls | <code>array</code> | Array of MidiDeviceControl objects configured for this MidiDevice |


* [~MidiDevice](#module_midi-device..MidiDevice)
    * [.addMidiDeviceControl(midiDeviceControl)](#module_midi-device..MidiDevice+addMidiDeviceControl) ⇒ <code>array</code>
    * [.hasControlWithBindingOf(MidiMessage)](#module_midi-device..MidiDevice+hasControlWithBindingOf) ⇒ <code>boolean</code>

<a name="module_midi-device..MidiDevice+addMidiDeviceControl"></a>

#### midiDevice.addMidiDeviceControl(midiDeviceControl) ⇒ <code>array</code>
Add a MidiDeviceControl to this MidiDevice

**Kind**: instance method of [<code>MidiDevice</code>](#module_midi-device..MidiDevice)  
**Returns**: <code>array</code> - - Array of MidiDeviceControls in this MidiDevice instance  

| Param | Type | Description |
| --- | --- | --- |
| midiDeviceControl | <code>MidiDeviceControl</code> | MidiDeviceControl to add. |

<a name="module_midi-device..MidiDevice+hasControlWithBindingOf"></a>

#### midiDevice.hasControlWithBindingOf(MidiMessage) ⇒ <code>boolean</code>
Determine if this MidiDevice has a MidiDeviceControl with a specific MidiMessage binding

**Kind**: instance method of [<code>MidiDevice</code>](#module_midi-device..MidiDevice)  
**Returns**: <code>boolean</code> - - true if control exists, false if it doesn't exist  

| Param | Type | Description |
| --- | --- | --- |
| MidiMessage | <code>object</code> | MidiMessage.values array to search for. e.g. "[10,45,127]" |

