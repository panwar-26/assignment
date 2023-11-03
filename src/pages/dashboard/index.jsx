import Card from "../../global-components/card";
import "./styles.scss";
import PriorityComponent from "../../global-components/priority";
import StatusComponent from "../../global-components/status";
// eslint-disable-next-line react/prop-types
const MyComponent = ({ condition, name }) => {
    let content;
    
    switch (condition) {
      case 0:
        content=<div className="head-icon"></div>;
        break;
      case 1:
        content=<PriorityComponent condi={name} />;
        break;
      case 2:
        content=<StatusComponent condi={name} />;
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

}


const Dashboard = ({ columns, cardMap, group}) => {
    // console.log(columns);



    return (
        <section className="dashboard">
            <div className="card-column-container">
                {columns.map((col, idx) => {
                    // console.log(cardMap[col.id]);
                    return (
                        <div className="card-column" key={idx}>
                            <div className="flex head-info align-center">
                                <MyComponent condition={group} name={col.name} />
                                <p className="head-text">{col.name}</p>
                            </div>
                            <div className="card-column-cards">
                                {cardMap[col.id].map((card, idx) => {
                                    return (
                                        <Card
                                            key={idx}
                                            status={card.status}
                                            content={card.title}
                                            // heading={card}
                                            heading={card.id}
                                            tags={card.tag}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Dashboard;
