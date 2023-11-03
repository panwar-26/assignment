import React from 'react';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import HourglassFullOutlinedIcon from '@mui/icons-material/HourglassFullOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';

const StatusComponent = ({ condi }) => {
  let content;
  
  switch (condi) {
    case 'In progress':
      content = <HourglassFullOutlinedIcon />;
      break;
    case 'Backlog':
      content = <ReportProblemRoundedIcon />;
      break;
    case 'Todo':
      content = <PendingOutlinedIcon />;
      break;
    default:
      content = <div>Default Content</div>;
      break;
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default StatusComponent;
