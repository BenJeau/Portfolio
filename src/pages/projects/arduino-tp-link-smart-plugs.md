---
name: Arduino TP-Link Smart Plugs
link: https://github.com/BenJeau/arduino-tp-link-smart-plugs
readmeLink: https://raw.githubusercontent.com/BenJeau/arduino-tp-link-smart-plugs/master/README.md
description: Control TP-Link smart plugs with arduino and raspberry pi or any other linux system
date: 2018-02-20T01:07:37Z
languages: ["Python","C++"]
type: other
---

# arduino-tp-link-smart-plugs
Control TP-Link smart plugs with an Arduino and Raspberry Pi or any other linux system. I only own the TP-Link Smart Wi-Fi Plug Mini HS105, but I think it also works with their other similar smart plugs since you can control most of them with your KASA account.

## Preliminary steps
In order to control the smart plugs, you need to get your TP-Link KASA token from your account, the endpoint URL for your smart plugs, and the deviceId of them as well. 

### Python Script

#### TP-Link KASA token
Firstly, to get the token from your account, you need to do a POST request to https://wap.tplinkcloud.com like this one:

```
{
  "method": "login",
  "params": {
    "appType": "Kasa_Android",
    "cloudUserName": "XXXXXXX",
    "cloudPassword": "XXXXXXX",
    "terminalUUID": "UUIDv4"
   }
}
```

You will first need to replace the XXXXXXX with you TP-Link KASA account credentials and UUIDv4 to one that you generate, you can generate one [here](http://onlineuuidgenerator.com). To facilitate the POST request, you can use this site [hurl.it]. Under destination, change GET to POST and the destination URL is https://wap.tplinkcloud.com, add a header name called *Content-type* with the value of *application/json*, under parameters, click on add body and copy the block of code above with your information, and click on *Launch Request*. If all went well, you should get a JSON response from the server and your TP-Link Kasa token will be in that data. You will need to change the string called "token" in the main python file to your account token.

#### Endpoint URL and deviceId
Secondly, to get the end point URL and the deviceID, you need do another POST request. The location will be https://wap.tplinkcloud.com/?token=ACQUIRED_TOKEN, you just need to change the last part *ACQUIRED_TOKEN* to the TP-Link KASA account token you got in previously. You can follow the same steps mentioned previously, but in the parameters' body, you will need to only put this:

```
{"method":"getDeviceList"}
```

You will get another JSON response from the server. Here what we are looking for if the value of "appServerURL" (which is the endpoint URL) and all of the values of "deviceId" in the list of "deviceList". In order to identify the device, in the same list element, you will see "alias" which has the name of the smart plug.

Afterwards, you only need to add the deviceIds to the array in the main python file called "devices". Eventually, this process will be a little more automated once I learn more how to do and handle POST requests in Python. 

### Arduino File
For the Arduino, I'm using a joystick connected to X pin for the power, X pin for the ground, and X pin for the communication and data transfer. You can change this as you which in the Arduino file. 

## Launch
Once everything is correctly setup, load the Arduino script on the Arduino (and specify the USB port of the Arduino), connect the Arduino to a system connected to the Internet, such as a Raspberry Pi or anything else, launch the Python script on that system, and should be able to control your TP-Link Smart Wi-Fi Plug! 
