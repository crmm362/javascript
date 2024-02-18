(async () => {
  const usbDevice = await navigator.usb.requestDevice({
    filters: [{ vendorId: 0x0a12 }],
  });

  await usbDevice.open();
  console.log("device", usbDevice);
  await usbDevice.selectConfiguration(1);
})();
