import {
  faBootstrap,
  faDocker,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faNodeJs,
  faPhp,
  faPython,
  faReact,
  faRust,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./common/Card";
import { faDatabase, faFileExcel } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const Skill = (props: Props) => {
  return (
    <Card title="Skill">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="text-center">
          <FontAwesomeIcon icon={faHtml5} className="h-10" />
          <p>HTML</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faBootstrap} className="h-10" />
          <p>Bootstrap</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faReact} className="h-10" />
          <p>React</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJs} className="h-10" />
          <p>JS</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faDatabase} className="h-10" />
          <p>MySQL</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faNodeJs} className="h-10" />
          <p>Node.Js</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faGithub} className="h-10" />
          <p>Github</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faFileExcel} className="h-10" />
          <p>Excel</p>
        </div>
      </div>
    </Card>
  );
};

export default Skill;
