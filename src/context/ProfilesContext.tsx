import { createContext, useState, useEffect } from "react";

interface ProfilesData {
  id: string;
  fullname: string;
  dob: string;
  position: string;
}
interface addData {
  fullname: string;
  dob: string;
  position: string;
}
interface Profiles {
  profiles: ProfilesData[];
  addProfile: (newProfile: addData) => void;
  deleteProfile: (id: string) => void;
}

const ProfilesContext = createContext<Profiles | undefined>(undefined);

export const ProfilesProvider = ({ children }: any) => {
  const [profiles, setProfiles] = useState<ProfilesData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:3000/profiles`);
    const data = await response.json();
    setProfiles(data);
  };

  const addProfile = async (newProfile: addData) => {
    try {
      const response = await fetch("http://localhost:3000/profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProfile),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setProfiles((prevProfiles) => [...prevProfiles, data]);
    } catch (error) {
      console.error("Error adding profile:", error);
    }
  };

  const deleteProfile = async (id: string) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`http://localhost:3000/profiles/${id}`, { method: "DELETE" });

      setProfiles(profiles.filter((item) => item.id !== id));
    }
  };

  return (
    <ProfilesContext.Provider value={{ profiles, addProfile, deleteProfile }}>
      {children}
    </ProfilesContext.Provider>
  );
};

export default ProfilesContext;
