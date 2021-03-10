import {
  // MdLightbulbOutline,
  // MdMailOutline,
  // MdSnooze,
  // MdPlayCircleOutline,
  // MdRadio,
  // MdControlPoint,
  MdKeyboard,
  MdMic,
  MdMouse,
  MdNavigateNext,
  MdSettingsRemote,
  MdDevicesOther,
  MdKeyboardReturn,
} from 'react-icons/md';

export const devicePageRoute = [
  {
    bgColor: 'primary',
    icon: MdDevicesOther,
    title: 'All devices',
    subtitle: '',
    to: '/Device_Management'
  },
  {
    bgColor: 'secondary',
    icon: MdNavigateNext,
    title: 'Borrow',
    subtitle: '',
    to: '/Device_Management/Borrow'
  },
  {
    bgColor: 'success',
    icon: MdKeyboardReturn,
    title: 'Return',
    subtitle: '',
    to: '/Device_Management/Return'
  }
];


export const deviceBorrowRoute = [
  {
    bgColor: 'primary',
    Icon: MdMouse,
    title: 'Mouse',
    subtitle: '',
    to: '/Device_Management/Borrow/Mouse'
  },
  {
    bgColor: 'secondary',
    Icon: MdKeyboard,
    title: 'Keyboard',
    subtitle: '',
    to: '/Device_Management/Borrow/Keyboard'
  },
  {
    bgColor: 'success',
    Icon: MdMic,
    title: 'Micro',
    subtitle: '',
    to: '/Device_Management/Borrow/Micro'
  },
  {
    bgColor: 'success',
    Icon: MdSettingsRemote,
    title: 'Remote',
    subtitle: '',
    to: '/Device_Management/Borrow/Remote'
  }
];

export const numberWidgetsData = [
  { color: 'primary' },
  { color: 'secondary' },
  { color: 'success' },
  { color: 'info' },
  { color: 'warning' },
  { color: 'danger' },
  { color: 'light' },
  { color: 'dark' },
];
