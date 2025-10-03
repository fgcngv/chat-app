

"use client"

import { 
    DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuContent, 
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator
  } from "@/components/ui/dropdown-menu";
  import { Button } from "@/components/ui/button";
import { useState } from "react";
  
  export default function LanguageDropdown() {
    const [language,setLanguage] = useState("eng");

console.log(language)

    return (
      <DropdownMenu>
        {/* The trigger button */}
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Choose Language</Button>
        </DropdownMenuTrigger>
  
        {/* The dropdown content */}
        <DropdownMenuContent>
          <DropdownMenuLabel>Languages</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setLanguage("eng")}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage("amh")}>
            Amharic
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() =>setLanguage("oro")}>
            Afan Oromo
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  

