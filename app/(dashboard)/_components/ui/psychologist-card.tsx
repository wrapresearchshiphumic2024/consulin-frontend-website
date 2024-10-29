import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  formatCommaSeparated,
  formatFullName,
  getInitials,
} from "@/helpers/string-helpers";
import { cn } from "@/lib/utils";
import { User } from "@/types/user/user-type-data";

import React from "react";

interface PsychologistCardProps {
  user_psychologist: User;
  children?: React.ReactNode;
  available?: boolean;
}

export default function PsychologistCard({
  user_psychologist,
  children,
  available = false,
}: PsychologistCardProps) {
  return (
    <Card
      key={user_psychologist.id}
      className="rounded-[30px] shadow-none bg-[#FCFCFC] flex flex-col items-center w-full"
    >
      <Avatar className="rounded-full w-24 h-24 mb-4 mt-6">
        <AvatarImage
          src={user_psychologist.profile_picture || ""}
          alt={`${user_psychologist.firstname} ${user_psychologist.lastname}`}
        />
        <AvatarFallback>
          {getInitials(user_psychologist.firstname, user_psychologist.lastname)}
        </AvatarFallback>
      </Avatar>

      <div className="text-left w-full mb-4  text-[#27374D] space-y-3 px-6  ">
        <h2 className="text-xl font-bold text-center mb-[30px]">
          <p>
            {formatFullName(
              user_psychologist.firstname,
              user_psychologist.lastname
            )}
          </p>
        </h2>
        {available ? (
          <>
            <p>Gender :{user_psychologist.gender}</p>
          </>
        ) : (
          <>
            <p>
              SPP ID:
              {user_psychologist.psychologist
                ?.profesional_identification_number || "N/A"}
            </p>
            <p className="leading-tight break-words">
              Degree: {user_psychologist.psychologist?.degree || "N/A"}
            </p>
          </>
        )}

        <p>
          Specialization:{" "}
          {formatCommaSeparated(
            user_psychologist.psychologist?.specialization || []
          )}
        </p>
        <p>
          Experience: {user_psychologist.psychologist?.work_experience || "N/A"}
        </p>
      </div>
      <div className="pb-6">{children}</div>
    </Card>
  );
}
