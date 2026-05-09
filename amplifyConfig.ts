import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import { Amplify } from 'aws-amplify';
import outputs from './amplify_outputs.json';

console.log('=== Amplify Config Start ===');
//console.log('Auth Config:', outputs.auth);
//console.log('Data Config:', outputs.data);

Amplify.configure(outputs);

console.log('=== Amplify Configured ===');
