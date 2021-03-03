import { increment, incrementByAmount } from './counterSlice';
import { filter, mapTo } from 'rxjs/operators';
import { Epic } from 'redux-observable';

const counterEpic: Epic = (action$) =>
  action$.pipe(
    filter((action) => action.type === increment.type),
    mapTo(incrementByAmount(2))
  );

export { counterEpic };
