import * as React from 'react';

export default class QRCode extends React.Component<QRCodeProperties> { }

export interface QRCodeProperties {
  value?: string;
  size?: number;
  level?: string;
  bgColor?: string;
  fgColor?: string;
}