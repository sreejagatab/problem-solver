// load-testing.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  http.get('http://localhost:3000/');
  check(http.get('http://localhost:3000/dashboard'), {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}