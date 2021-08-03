import configureMockStore from 'redux-mock-store';
import promise from 'redux-promise-middleware';
import nock from 'nock';
import * as Action from '../../redux/actions/index';

const middlewares = [promise];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FETCH_GAMES_DATA_FULFILLED when fetching games has been done', () => {
    nock('https://api.rawg.io')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })
      .get('/api/games?key=0c2599def9e140fa9a93175f976efda3&page=1&page_size=15')
      .reply(200, []);

    return store.dispatch(Action.fetchGamesData())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });

  it('creates FETCH_SINGLE_GAME_DATA_FULFILLED when fetching games has been done', () => {
    nock('https://api.rawg.io')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })
      .get('/api/games/1?key=0c2599def9e140fa9a93175f976efda3')
      .reply(200, []);

    return store.dispatch(Action.fetchSingleGameData(1))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });

  it('creates FETCH_GAMES_BY_GENRE_FULFILLED when fetching games has been done', () => {
    nock('https://api.rawg.io')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })
      .get('/api/games?key=0c2599def9e140fa9a93175f976efda3&page_size=15&genres=racing&page=1')
      .reply(200, []);

    return store.dispatch(Action.fetchGamesByGenre('racing'))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
});
