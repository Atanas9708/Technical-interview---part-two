import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from '../store/selectors';
import { saveChanges, getPostsSuccess, fetchFailed } from '../store/actions/actions';
import Post from './Post';
import { fetchPosts, getRandomId } from '../api/remote';
import Collapsible from 'react-collapsible';

export default function User({ id }) {
  const user = useSelector(state => getUserById(state, id));
  const dispatch = useDispatch();

  let [userInfo, setUser] = useState({
    userId: user.id,
    name: user.name,
    phone: user.phone,
    email: user.email,
    website: user.website,
    city: user.address.city,
    street: user.address.street,
    suite: user.address.suite,
    zipcode: user.address.zipcode,
    companyName: user.company.name,
    companyBs: user.company.bs,
    companyCatchPhrase: user.company.catchPhrase,
    posts: user.posts
  });
  
  function save(e) {
    e.preventDefault();
    dispatch(saveChanges(userInfo));
  }

  async function getPosts(e) {
    e.preventDefault();
    try {
      const posts = await fetchPosts(id);
      dispatch(getPostsSuccess(posts));
    } catch(err) {
      dispatch(fetchFailed(err));
    }
  }

  function onChange(e) {
    setUser({...userInfo, [e.target.name]: e.target.value});
  }

  return (
  <Collapsible triggerTagName="div" trigger={user.name}>
  <form className="w3-ul w3-card-4">
    <div className="Collapsible">
      <img src={`https://www.w3schools.com/w3images/avatar${getRandomId()}.png`} className="Collapsible" />
      <div className="w3-bar-item">
        <div className="row">
          <label> Name:
            <input type="text" name="name" onChange={onChange} value={userInfo.name || ''} />
          </label>
        </div>
        <div className="row">
          <label> Email:  
            <input type="text" name="email" onChange={onChange} value={userInfo.email || ''} />
          </label>
        </div>
        <div className="row">
          <label> Phone number:  
            <input type="text" name="phone" onChange={onChange} value={userInfo.phone || ''} />
          </label>
        </div>
        <div className="row">
          <label> Website:  
            <input type="text" name="website" onChange={onChange} value={userInfo.website || ''} />
          </label>
        </div>
        <div className="row">
          <label> City:  
            <input type="text" name="city" onChange={onChange} value={userInfo.city || ''} />
          </label>
        </div>
        <div className="row">
          <label> Street:  
            <input type="text" name="street" onChange={onChange} value={userInfo.street || ''} />
          </label>
        </div>
        <div className="row">
          <label> Suite:  
            <input type="text" name="suite" onChange={onChange} value={userInfo.suite || ''} />
          </label>
        </div>
        <div className="row">
          <label> Zipcode:  
            <input type="text" name="zipcode" onChange={onChange} value={userInfo.zipcode || ''} />
          </label>
        </div>
        <div className="row">
          <label> Company Name:  
            <input type="text" name="companyName" onChange={onChange} value={userInfo.companyName || ''} />
          </label>
        </div>
        <div className="row">
          <label> Company Bs:  
            <input type="text" name="companyBs" onChange={onChange} value={userInfo.companyBs || ''} />
          </label>
        </div>
        <div className="row">
          <label> Company Catch Phrase:  
            <input type="text" name="companyCatchPhrase" onChange={onChange} value={userInfo.companyCatchPhrase || ''} />
          </label>
        </div>
      
        <div className="btn-container">
          {user.posts.length === 0 && <button className="btn-blue" onClick={getPosts} >Get User's Posts </button>}
          <button className="btn-green" onClick={save} >Save Changes</button>
        </div>

          { user.posts.length !== 0 && 
            <div className="post-container">
              {
                user.posts.map((post, index) =>
                  <Post 
                    key={index}
                    post={post}
                  />  
              )}
            </div>
          } 
      </div>
    </div>
   </form>
   </Collapsible> 
  )
}
