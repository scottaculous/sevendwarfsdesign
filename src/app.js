//From https://aws-amplify.github.io/docs/js/start
//The code above imports only the Auth and Analytics categories. To import the 
//entire Amplify library use import Amplify from 'aws-amplify'. However, importing only
//the required categories is recommended as it will greatly reduce the final bundle size.

import Auth from '@aws-amplify/auth';
import Analytics from '@aws-amplify/analytics';

import aws_exports from './aws-exports';

// retrieve temporary AWS credentials and sign requests
Auth.configure(aws_exports);
// send analytics events to Amazon Pinpoint
Analytics.configure(aws_exports);

const AnalyticsResult = document.getElementById('AnalyticsResult');
const AnalyticsEventButton = document.getElementById('AnalyticsEventButton');
let EventsSent = 0;
AnalyticsEventButton.addEventListener('click', (evt) => {
    Analytics.record('AWS Amplify Tutorial Event')
        .then( (evt) => {
            const url = 'https://console.aws.amazon.com/pinpoint/home/?region=us-east-1#/apps/'+awsconfig.aws_mobile_analytics_app_id+'/analytics/events';
            AnalyticsResult.innerHTML = '<p>Event Submitted.</p>';
            AnalyticsResult.innerHTML += '<p>Events sent: '+(++EventsSent)+'</p>';
            AnalyticsResult.innerHTML += '<a href="'+url+'" target="_blank">View Events on the Amazon Pinpoint Console</a>';
        });
});
