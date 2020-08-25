/* istanbul ignore file */
import React from 'react';

/**
 * Gets icon SVG view box.
 *
 * @param {string} name
 *   The name of the icon.
 *
 * @return {string}
 *   The SVG view box.
 */
export const viewBoxes = (name) => {
  switch (name) {
    case 'envelop':
      return '0 0 17 12';
    case 'github':
      return '0 0 17 16';
    case 'download':
    case 'linkedin':
    case 'medium':
    case 'skype':
      return '0 0 17 17';
    case 'twitter':
      return '0 0 20 17';
    default:
      return '0 0 32 32';
  }
};

/**
 * Gets icon SVG path.
 *
 * @param {string} name
 *   The name of the icon.
 * @param {object} props
 *   All the other React Component props.
 *
 * @return {Node}
 *   The SVG path.
 */
export const paths = (name, props) => {
  switch (name) {
    case 'download':
      return (
        <path
          {...props}
          transform="translate(-2 -2)"
          d="M9.15,2.4 L11.65,2.4 C12.065625,2.4 12.4,2.734375 12.4,3.15 L12.4,8.4 L15.140625,8.4 C15.696875,8.4 15.975,9.071875 15.58125,9.465625 L10.828125,14.221875 C10.59375,14.45625 10.209375,14.45625 9.975,14.221875 L5.215625,9.465625 C4.821875,9.071875 5.1,8.4 5.65625,8.4 L8.4,8.4 L8.4,3.15 C8.4,2.734375 8.734375,2.4 9.15,2.4 Z M18.4,14.15 L18.4,17.65 C18.4,18.065625 18.065625,18.4 17.65,18.4 L3.15,18.4 C2.734375,18.4 2.4,18.065625 2.4,17.65 L2.4,14.15 C2.4,13.734375 2.734375,13.4 3.15,13.4 L7.734375,13.4 L9.265625,14.93125 C9.89375,15.559375 10.90625,15.559375 11.534375,14.93125 L13.065625,13.4 L17.65,13.4 C18.065625,13.4 18.4,13.734375 18.4,14.15 Z M14.525,16.9 C14.525,16.55625 14.24375,16.275 13.9,16.275 C13.55625,16.275 13.275,16.55625 13.275,16.9 C13.275,17.24375 13.55625,17.525 13.9,17.525 C14.24375,17.525 14.525,17.24375 14.525,16.9 Z M16.525,16.9 C16.525,16.55625 16.24375,16.275 15.9,16.275 C15.55625,16.275 15.275,16.55625 15.275,16.9 C15.275,17.24375 15.55625,17.525 15.9,17.525 C16.24375,17.525 16.525,17.24375 16.525,16.9 Z"
        />
      );
    case 'envelop':
      return (
        <path
          {...props}
          transform="translate(-2 -4)"
          d="M16.9,4 L3.9,4 C3.0715625,4 2.4,4.6715625 2.4,5.5 L2.4,14.5 C2.4,15.3284375 3.0715625,16 3.9,16 L16.9,16 C17.7284375,16 18.4,15.3284375 18.4,14.5 L18.4,5.5 C18.4,4.6715625 17.7284375,4 16.9,4 Z M16.9,5.5 L16.9,6.77515625 C16.1993125,7.34575 15.08225,8.233 12.6941563,10.1029688 C12.167875,10.5169375 11.125375,11.5114688 10.4,11.499875 C9.67475,11.5115938 8.63190625,10.5167813 8.10584375,10.1029688 C5.718125,8.23328125 4.60078125,7.34584375 3.9,6.77515625 L3.9,5.5 L16.9,5.5 Z M3.9,14.5 L3.9,8.6999375 C4.6160625,9.27028125 5.63153125,10.070625 7.1793125,11.282625 C7.86234375,11.8202813 9.0585,13.0071875 10.4,12.9999688 C11.7349063,13.0071875 12.9159063,11.8375 13.6204063,11.282875 C15.1681563,10.0709063 16.1839063,9.27034375 16.9,8.6999375 L16.9,14.5 L3.9,14.5 Z"
        />
      );
    // Social Icons
    case 'github':
      return (
        <path
          {...props}
          transform="translate(-2 -2)"
          d="M7.7516129,14.9612903 C7.7516129,15.0258065 7.67741935,15.0774194 7.58387097,15.0774194 C7.47741935,15.0870968 7.40322581,15.0354839 7.40322581,14.9612903 C7.40322581,14.8967742 7.47741935,14.8451613 7.57096774,14.8451613 C7.66774194,14.8354839 7.7516129,14.8870968 7.7516129,14.9612903 Z M6.7483871,14.816129 C6.72580645,14.8806452 6.79032258,14.9548387 6.88709677,14.9741935 C6.97096774,15.0064516 7.06774194,14.9741935 7.08709677,14.9096774 C7.10645161,14.8451613 7.04516129,14.7709677 6.9483871,14.7419355 C6.86451613,14.7193548 6.77096774,14.7516129 6.7483871,14.816129 Z M8.17419355,14.7612903 C8.08064516,14.783871 8.01612903,14.8451613 8.02580645,14.9193548 C8.03548387,14.983871 8.11935484,15.0258065 8.21612903,15.0032258 C8.30967742,14.9806452 8.37419355,14.9193548 8.36451613,14.8548387 C8.35483871,14.7935484 8.26774194,14.7516129 8.17419355,14.7612903 Z M10.2967742,2.4 C5.82258065,2.4 2.4,5.79677419 2.4,10.2709677 C2.4,13.8483871 4.6516129,16.9096774 7.86774194,17.9870968 C8.28064516,18.0612903 8.42580645,17.8064516 8.42580645,17.5967742 C8.42580645,17.3967742 8.41612903,16.2935484 8.41612903,15.616129 C8.41612903,15.616129 6.15806452,16.1 5.68387097,14.6548387 C5.68387097,14.6548387 5.31612903,13.716129 4.78709677,13.4741935 C4.78709677,13.4741935 4.0483871,12.9677419 4.83870968,12.9774194 C4.83870968,12.9774194 5.64193548,13.0419355 6.08387097,13.8096774 C6.79032258,15.0548387 7.97419355,14.6967742 8.43548387,14.483871 C8.50967742,13.9677419 8.71935484,13.6096774 8.9516129,13.3967742 C7.1483871,13.1967742 5.32903226,12.9354839 5.32903226,9.83225806 C5.32903226,8.94516129 5.57419355,8.5 6.09032258,7.93225806 C6.00645161,7.72258065 5.73225806,6.85806452 6.17419355,5.74193548 C6.8483871,5.53225806 8.4,6.61290323 8.4,6.61290323 C9.04516129,6.43225806 9.73870968,6.33870968 10.4258065,6.33870968 C11.1129032,6.33870968 11.8064516,6.43225806 12.4516129,6.61290323 C12.4516129,6.61290323 14.0032258,5.52903226 14.6774194,5.74193548 C15.1193548,6.86129032 14.8451613,7.72258065 14.7612903,7.93225806 C15.2774194,8.50322581 15.5935484,8.9483871 15.5935484,9.83225806 C15.5935484,12.9451613 13.6935484,13.1935484 11.8903226,13.3967742 C12.1870968,13.6516129 12.4387097,14.1354839 12.4387097,14.8935484 C12.4387097,15.9806452 12.4290323,17.3258065 12.4290323,17.5903226 C12.4290323,17.8 12.5774194,18.0548387 12.9870968,17.9806452 C16.2129032,16.9096774 18.4,13.8483871 18.4,10.2709677 C18.4,5.79677419 14.7709677,2.4 10.2967742,2.4 Z M5.53548387,13.5258065 C5.49354839,13.5580645 5.50322581,13.6322581 5.55806452,13.6935484 C5.60967742,13.7451613 5.68387097,13.7677419 5.72580645,13.7258065 C5.76774194,13.6935484 5.75806452,13.6193548 5.70322581,13.5580645 C5.6516129,13.5064516 5.57741935,13.483871 5.53548387,13.5258065 Z M5.18709677,13.2645161 C5.16451613,13.3064516 5.19677419,13.3580645 5.26129032,13.3903226 C5.31290323,13.4225806 5.37741935,13.4129032 5.4,13.3677419 C5.42258065,13.3258065 5.39032258,13.2741935 5.32580645,13.2419355 C5.26129032,13.2225806 5.20967742,13.2322581 5.18709677,13.2645161 Z M6.23225806,14.4129032 C6.18064516,14.4548387 6.2,14.5516129 6.27419355,14.6129032 C6.3483871,14.6870968 6.44193548,14.6967742 6.48387097,14.6451613 C6.52580645,14.6032258 6.50645161,14.5064516 6.44193548,14.4451613 C6.37096774,14.3709677 6.27419355,14.3612903 6.23225806,14.4129032 Z M5.86451613,13.9387097 C5.81290323,13.9709677 5.81290323,14.0548387 5.86451613,14.1290323 C5.91612903,14.2032258 6.00322581,14.2354839 6.04516129,14.2032258 C6.09677419,14.1612903 6.09677419,14.0774194 6.04516129,14.0032258 C6,13.9290323 5.91612903,13.8967742 5.86451613,13.9387097 Z"
        />
      );
    case 'linkedin':
      return (
        <path
          {...props}
          transform="translate(-2 -2)"
          d="M5.98142857,18.4 L2.66428571,18.4 L2.66428571,7.71785714 L5.98142857,7.71785714 L5.98142857,18.4 Z M4.32107143,6.26071429 C3.26035714,6.26071429 2.4,5.38214286 2.4,4.32142857 C2.4,3.26045013 3.26009299,2.40035717 4.32107143,2.40035717 C5.38204987,2.40035717 6.24214286,3.26045013 6.24214286,4.32142857 C6.24214286,5.38214286 5.38142857,6.26071429 4.32107143,6.26071429 Z M18.3964286,18.4 L15.0864286,18.4 L15.0864286,13.2 C15.0864286,11.9607143 15.0614286,10.3714286 13.3617857,10.3714286 C11.6371429,10.3714286 11.3728571,11.7178571 11.3728571,13.1107143 L11.3728571,18.4 L8.05928571,18.4 L8.05928571,7.71785714 L11.2407143,7.71785714 L11.2407143,9.175 L11.2871429,9.175 C11.73,8.33571429 12.8117857,7.45 14.4257143,7.45 C17.7828571,7.45 18.4,9.66071429 18.4,12.5321429 L18.4,18.4 L18.3964286,18.4 Z"
        />
      );
    case 'medium':
      return (
        <path
          {...props}
          transform="translate(-2 -2)"
          d="M2.4,2.4 L2.4,18.4 L18.4,18.4 L18.4,2.4 L2.4,2.4 Z M15.6928571,6.18928571 L14.8357143,7.01071429 C14.7607143,7.06785714 14.725,7.16071429 14.7392857,7.25 L14.7392857,13.2964286 C14.725,13.3892857 14.7607143,13.4821429 14.8357143,13.5357143 L15.675,14.3571429 L15.675,14.5392857 L11.4607143,14.5392857 L11.4607143,14.3642857 L12.3285714,13.5214286 C12.4142857,13.4357143 12.4142857,13.4107143 12.4142857,13.2821429 L12.4142857,8.39285714 L10,14.5214286 L9.675,14.5214286 L6.86428571,8.39285714 L6.86428571,12.5 C6.83928571,12.6714286 6.9,12.8464286 7.02142857,12.9714286 L8.15,14.3392857 L8.15,14.5214286 L4.94285714,14.5214286 L4.94285714,14.3392857 L6.07142857,12.9714286 C6.19285714,12.8464286 6.24642857,12.6714286 6.21785714,12.5 L6.21785714,7.75 C6.23214286,7.61785714 6.18214286,7.48928571 6.08214286,7.4 L5.07857143,6.18928571 L5.07857143,6.00714286 L8.19642857,6.00714286 L10.6035714,11.2928571 L12.7214286,6.01071429 L15.6928571,6.01071429 L15.6928571,6.18928571 Z"
        />
      );
    case 'skype':
      return (
        <path
          {...props}
          transform="translate(-2 -2)"
          d="M17.5678571,11.9642857 C17.6714286,11.4642857 17.7357143,10.9321429 17.7357143,10.4 C17.7357143,6.34642857 14.4535714,3.06785714 10.4035714,3.06785714 C9.87142857,3.06785714 9.34285714,3.12857143 8.83928571,3.23571429 C8.16071429,2.71071429 7.31785714,2.4 6.4,2.4 C4.19285714,2.4 2.4,4.19285714 2.4,6.4 C2.4,7.31785714 2.71071429,8.16071429 3.23214286,8.83571429 C3.12857143,9.33571429 3.06428571,9.86785714 3.06428571,10.4 C3.06428571,14.4535714 6.34642857,17.7321429 10.3964286,17.7321429 C10.9285714,17.7321429 11.4571429,17.6714286 11.9607143,17.5642857 C12.6392857,18.0857143 13.4821429,18.3964286 14.3964286,18.3964286 C16.6035714,18.3964286 18.396459,16.6035714 18.396459,14.3964286 C18.4,13.4821429 18.0892857,12.6392857 17.5678571,11.9642857 L17.5678571,11.9642857 Z M10.6178571,15.2321429 C8.275,15.2321429 6.31428571,14.1892857 6.31428571,12.9107143 C6.31428571,12.3392857 6.63571429,11.8178571 7.36785714,11.8178571 C8.48214286,11.8178571 8.58571429,13.4214286 10.5142857,13.4214286 C11.4321429,13.4214286 12.025,13.0142857 12.025,12.4821429 C12.025,11.8142857 11.4535714,11.7107143 10.525,11.4821429 C8.29285714,10.9321429 6.31785714,10.6964286 6.31785714,8.36785714 C6.31785714,6.25357143 8.41071429,5.47142857 10.2142857,5.47142857 C12.1821429,5.47142857 14.1714286,6.25357143 14.1714286,7.45 C14.1714286,8.05357143 13.7642857,8.58571429 13.0892857,8.58571429 C12.0785714,8.58571429 12.0464286,7.38928571 10.4107143,7.38928571 C9.49285714,7.38928571 8.91071429,7.63928571 8.91071429,8.19285714 C8.91071429,8.9 9.65357143,8.97142857 11.3785714,9.37142857 C12.8571429,9.70357143 14.6178571,10.3285714 14.6178571,12.1428571 C14.6178571,14.2535714 12.5785714,15.2321429 10.6178571,15.2321429 L10.6178571,15.2321429 Z"
        />
      );
    case 'twitter':
      return (
        <path
          {...props}
          transform="translate(-3 -4)"
          d="M20.9442107,8.05142206 C20.9569061,8.22907901 20.9569061,8.40677501 20.9569061,8.58443196 C20.9569061,14.0032031 16.832554,20.2468994 9.29443865,20.2468994 C6.97208583,20.2468994 4.81473365,19.5742796 3,18.4068141 C3.32996223,18.4448611 3.64719003,18.4575565 3.98984762,18.4575565 C5.90606604,18.4575565 7.6700573,17.8103664 9.07869562,16.7062996 C7.27665733,16.6682135 5.76649518,15.4880136 5.24618065,13.8636323 C5.5,13.9016793 5.75379982,13.92707 6.0203243,13.92707 C6.38833355,13.92707 6.75638186,13.8762886 7.09900039,13.7874992 C5.22082899,13.4067555 3.81215161,11.7570225 3.81215161,9.76463188 L3.81215161,9.71388949 C4.3578178,10.018461 4.9923906,10.2088133 5.66493228,10.234165 C4.56086547,9.4981074 3.83754233,8.24177437 3.83754233,6.82044069 C3.83754233,6.05903147 4.04055094,5.36105999 4.39590389,4.75191699 C6.41368521,7.23923139 9.44670487,8.86357367 12.8476947,9.04126968 C12.784257,8.73669818 12.7461709,8.41947038 12.7461709,8.10220351 C12.7461709,5.84328844 14.5735999,4.00320313 16.8451713,4.00320313 C18.0253712,4.00320313 19.0913519,4.49812693 19.8401048,5.29762224 C20.7664757,5.1199653 21.6547994,4.77730771 22.4416384,4.30777463 C22.1370279,5.25957522 21.4898379,6.05907053 20.6396002,6.56665064 C21.4644862,6.47786123 22.2639815,6.24938377 23,5.93215597 C22.4417166,6.74430758 21.743706,7.46763072 20.9442107,8.05142206 Z"
        />
      );
    default:
      return <path />;
  }
};

/**
 * List of icons supported by Storybook Knobs addon.
 */
export const iconsKnobsList = {
  Download: 'download',
  Envelop: 'envelop',
  GitHub: 'github',
  LinkedIn: 'linkedin',
  Medium: 'medium',
  Skype: 'skype',
  Twitter: 'twitter',
};