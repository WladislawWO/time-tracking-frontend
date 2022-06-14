import httpClient from '../api/httpClient';

class RoutineService {
  completeRoutine({ _id, completed }) {
    return httpClient.post('routine/complete', { _id, completed }).then((res) => res);
  }

  getRoutineList() {
    return httpClient.get('routine').then((res) => res);
  }

  getRoutine(id) {
    return httpClient.get(`routine/${id}`).then((res) => res);
  }
}

export const routineService = new RoutineService();
