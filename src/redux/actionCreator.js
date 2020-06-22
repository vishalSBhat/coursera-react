import * as ActionTypes from './actionTypes';
import {
    DISHES
} from '../shared/dishes';
import {
    baseUrl
} from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => dispatch => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(res => {
            if (res.ok)
                return res;
            else {
                const err = new Error(`Error ${res.status} : ${res.statusText}`);
                err.response = res;
                throw err;
            }
        }, err => {
            throw new Error(err)
        })
        .then(res => res.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(err => dispatch(dishesFailed(err.message)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = error => ({
    type: ActionTypes.DISHES_FAILED,
    payload: error
});

export const addDishes = dishes => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => dispatch => {
    return fetch(baseUrl + 'comments')
        .then(res => {
            if (res.ok)
                return res;
            else {
                const err = new Error(`Error ${res.status} : ${res.statusText}`);
                err.response = res;
                throw err;
            }
        }, err => {
            throw new Error(err)
        })
        .then(res => res.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(err => dispatch(commentsFailed(err.message)));
}

export const commentsFailed = error => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: error
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => dispatch => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(res => {
            if (res.ok)
                return res;
            else {
                const err = new Error(`Error ${res.status} : ${res.statusText}`);
                err.response = res;
                throw err;
            }
        }, err => {
            throw new Error(err)
        })
        .then(res => res.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(err => dispatch(promosFailed(err.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = error => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: error
});

export const addPromos = promos => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});