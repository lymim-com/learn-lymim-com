# 7 Message Objects

## 7.1 Organisation of Message Objects

According to the definition of the CAN all messages and data to be transfered are packed into "message objects", containing up to 8 byte of data. A message object is sent from one CAN node to other CAN nodes.

The CCP requires at least two message objects, one for each direction:

1) Command Receive Object :     **CRO**
2) Data Transmission Object :   **DTO**

The **CRO** is used for reception of command codes and related parameters to carry out internal functions or memory transfers between the loqically connected CAN devices. The reception of a command has to be prompted with a handshake message using the Data Transmission Object DTO (see below), and in this case a DTO is called a **Command Return Message**. The return code of this DTO message is used to determine whether the corresponding command has been successfully completed or not.

![](http://qiniuimg.lymim.com/manual/can-ccp.png)


**Functional Diagram** Communication flow between CCP master and slave devices.

The assignment of message identifiers to the above described objects is defined in the slave device description file (e.g. the ASAP2 format description file). which is used to configure the master device. lt is recommended that the bus priority of the message objects is carefully determined in order to avoid injury to other real-time communication on the bus. Also, the CRO should obtain higher priority than the DTO.

For all data transfered by the CCP no byte order for the protocol itself is defined. Because the data organisation depends on the ECU's CPU,the byte ordering is defined in the slave device description file. The only exceptions are the station addresses in the TEST, CONNECT and DISCONNECT commands.

## 7.2 Description of Message Objects

### 7.2.1 Command Receive Object CRO

A Command Receive Obiect CRO is sent from the master device to one of the slave devices. The slave device answers with a Data Transmission Object DTO containing a Command Return Message CRM.

Structure of object:

|         |                                           |
| ------- | ----------------------------------------- |
| Type    | Rx only                                   |
| Size    | 8 bytes message field                     |
| Purpose | Reception of commands in the slave device |

Parameters in message field:

| Position | Type  | Description                             |
| -------- | ----- | --------------------------------------- |
| 0        | byte  | command code = CMD                      |
| 1        | byte  | command counter = CTR                   |
| 2...7    | bytes | command related parameter and data area |

<style>
.container {
  padding: 5px;
  background-color: white;
  display:inline-block;
}
.border {
  border: solid black 2px;
}
.border > span {
  display: inline-block;
}
.border > span:not(:first-child) {
  border-left: solid black 1px;
  width: 40px;
}
.border > .gray-cell {
  background: lightgray;
}
.cells-desc {
  border: solid black 1px;
  border-top: solid black 0px;
  color: black;
  margin-left: 82px;
}
</style>

<div class="container">
  <div class="border">
    <span>CMD</span>
    <span>CTR</span>
    <span class="gray-cell">1</span>
    <span class="gray-cell">1</span>
    <span class="gray-cell">1</span>
    <span class="gray-cell">1</span>
    <span class="gray-cell">1</span>
    <span class="gray-cell">1</span>
  </div>
  <div class="cells-desc">
    Parameter and data field
  </div>
</div>
<br/>
<br/>

The data lenght code of the CRO must always be 8. Unused data bytes, marked as "don't care", in the command descriptions, may have arbitrary values.

### 7.2.2 Data Transmission Object DTO

The **DTO** has to carry all outqoing slave device messages and data as data packets. The first byte of a data packet (i.e. first byte of the DTO's data field) is used as the **Packet ID**.

The DTO is a

- **Command Return Message** CRM, if the DTO is sent as an answer to a CRO from the master device.
- **Event Message**, if the DTO reports internal slave status changes in order to invoke error recovery or other services. Details are explained in the chapter 'ErrorHandling'.
- **Data Acquisition Message**, if the Packet ID points to a corresponding **Object Descriptor Table** (ODT) that describes which data acquisition elements (i.e. variables) are contained in the remaining 7 data bytes of the packet. The ODTs are initialized and modified via protocol commands (see chapter 'Description of Commands').

Structure of object:

|         |                                      |
| ------- | ------------------------------------ |
| Type    | Tx (and Remote Tx Request reception) |
| Size    | 8 bytes message field                |
| Purpose | Command Return Message CRM or        |
|         | Event Message or                     |
|         | Data Acquisition Message             |

Parameters in message field:

| Position | Type | Description          |
| -------- | ---- | -------------------- |
| 0        | byte | data packet ID = PID |
| 1        | byte | data packet          |

Meaining of PID

| PID       | Interpretation (DTO contains) | Note                      |
| --------- | ----------------------------- | ------------------------- |
| 0xFF      | a Command Return Message      |                           |
| OxFE      | an Event Message              | CTR is don't care         |
| (0, 0xFD] | a Data Acquisiton Message     | see chapter 'Descriptions |
|           | corresponding to ODT n        | of Commands!'             |
