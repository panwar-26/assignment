import React from 'react';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import SignalCellular2BarOutlinedIcon from '@mui/icons-material/SignalCellular2BarOutlined';
import SignalCellular4BarOutlinedIcon from '@mui/icons-material/SignalCellular4BarOutlined';
import SignalCellular3BarOutlinedIcon from '@mui/icons-material/SignalCellular3BarOutlined';
import TripOriginOutlinedIcon from '@mui/icons-material/TripOriginOutlined';

const PriorityComponent = ({ condi }) => {
  let content;
  
  switch (condi) {
    case 'Urgent':
      content = <ReportProblemRoundedIcon />;
      break;
    case 'High':
      content = <SignalCellular4BarOutlinedIcon />;
      break;
    case 'Low':
      content = <SignalCellular2BarOutlinedIcon />;
      break;
    case 'Medium':
      content = <SignalCellular3BarOutlinedIcon />;
      break;
    case 'No priority':
      content = <TripOriginOutlinedIcon />;
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

export default PriorityComponent;
