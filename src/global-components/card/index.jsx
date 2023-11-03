import "./styles.scss";
import { limitText } from "../../utils/utils";
// eslint-disable-next-line react/prop-types
const Card = ({ tags, status, content, heading, active }) => {
    return (
        <div className="card">
            <div className="card-head">
                <p className="heading">{heading}</p>
                <div
                    className={`profile-pic ${
                        active === true ? "profile-active" : "profile-inactive"
                    }`}
                ></div>
            </div>
            <div className="card-body">
                <div className="content">
                    <div className="status"></div>
                    <p className="main-content-text">{limitText(content)}</p>
                </div>
            </div>
            <div className="card-end">
                {tags &&
                    tags.map((_tag) => {
                        return (
                            <p className="tag" key={_tag}>
                                {_tag}
                            </p>
                        );
                    })}
            </div>
        </div>
    );
};

export default Card;
