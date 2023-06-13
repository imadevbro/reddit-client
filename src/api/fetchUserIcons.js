export const fetchUserIcon = async (username) => {
    try {
      const response = await fetch(`https://www.reddit.com/user/${username}/about.json`);
      const data = await response.json();
      return data?.data?.icon_img.replace(/amp;/g, "");
    } catch (error) {
      console.error('Error fetching user icon:', error);
    }
  };