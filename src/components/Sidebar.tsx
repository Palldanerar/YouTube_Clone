import { Stack } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SchoolIcon from '@mui/icons-material/School';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

const categories = [
  { name: 'New', icon: <HomeIcon />, },
  { name: 'Coding', icon: <CodeIcon />, },
  { name: 'ReactJS', icon: <CodeIcon />, },
  { name: 'NextJS', icon: <CodeIcon />, },
  { name: 'Education', icon: <SchoolIcon />, },
  { name: 'Podcast', icon: <GraphicEqIcon />, },
  { name: 'Gaming', icon: <SportsEsportsIcon />, },
];


const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;