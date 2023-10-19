import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

export function HomeButton() {
  const { locations, textlessIcon } = useContext(AppContext);

  return (
    <div className="block fixed inset-x-0 bottom-[100px] right-[40px] z-10">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton
              size="lg"
              className="rounded-full bg-primary-color text-light-color"
            >
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            {locations.map((loc, index) => (
              <Link to={loc.href} key={index}>
                <SpeedDialAction className="bg-light-color">
                  {textlessIcon(loc)}
                </SpeedDialAction>
              </Link>
            ))}
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}
