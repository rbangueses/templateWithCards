import esMX from './es-mx.json';
import ptBR from './pt-br.json';
import th from './th.json';
import zhHans from './zh-hans.json';

// Export the template names as an enum for better maintainability when accessing them elsewhere
export enum StringTemplates {
  SelectAudioDevice = 'PSDeviceMgrSelectAudioDevice',
  SetDeviceSuccess = 'PSDeviceMgrSetDeviceSuccess',
  SetDeviceError = 'PSDeviceMgrSetDeviceError',
}

export const stringHook = () => ({
  'en-US': {
    [StringTemplates.SelectAudioDevice]: 'Select an audio device',
    [StringTemplates.SetDeviceSuccess]: 'Set {{selectedDevice}} as your audio device.',
    [StringTemplates.SetDeviceError]: 'There was an error attempting to set {{selectedDevice}} as your audio device.',
  },
  'es-MX': esMX,
  'pt-BR': ptBR,
  th,
  'zh-Hans': zhHans,
});
