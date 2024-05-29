import  { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';
import { FaUser } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { db, collection, addDoc, getDocs } from '../firebaseConfig';

const UserForm = () => {
  const [userName, setUserName] = useState('');
  const [profileLink, setProfileLink] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersList = querySnapshot.docs.map(doc => doc.data());
      setUsers(usersList);
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const linkedInUrlPattern = /^(https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/.*$/i;
    if (!linkedInUrlPattern.test(profileLink)) {
      toast.error('Please enter a valid LinkedIn profile URL.');
      return;
    }

    if (userName && profileLink) {
      setLoading(true);
      try {
        await addDoc(collection(db, "users"), {
          userName,
          profileLink
        });
        setUsers([...users, { userName, profileLink }]);
        setUserName('');
        setProfileLink('');
        toast.success('User added successfully!');
      } catch (error) {
        console.error("Error adding document: ", error);
        toast.error('Error adding user.');
      } finally {
        setLoading(false);
      }
    } else {
      toast.error('Please fill in both fields.');
    }
  };

  return (
    <div className="user-form">
      <h1>LinkedIn Network</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <FaUser />
          <input
            type="text"
            placeholder="Full Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <AiFillLinkedin />
          <input
            type="url"
            placeholder="LinkedIn Profile URL"
            value={profileLink}
            onChange={(e) => setProfileLink(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? <ClipLoader size={20} /> : 'Submit'}
        </button>
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <a href={user.profileLink} target="_blank" rel="noopener noreferrer">
              {user.userName}
            </a>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default UserForm;
