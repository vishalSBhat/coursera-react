import * as ActionTypes from './actionTypes';
import {
    DISHES
} from '../shared/dishes';
import {
    baseUrl
} from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => dispatch => {
    const newComment = {
        dishId,
        rating,
        author,
        comment,
        date: new Date().toISOString()
    }
    return fetch(baseUrl + 'comments', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
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
        }).then(res => res.json())
        .then(data => dispatch(addComment(data)))
        .catch(err => {
            console.log('Post Comments failed\nError : ' + err.message);
            alert('Your comments could not be posted\nError : ' + err.message)
        });

}

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