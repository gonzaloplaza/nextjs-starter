"use client";

import axios from "axios";
import { Loader2 } from "lucide-react";
import { Fragment, useCallback, useEffect, useState } from "react";

type RemoteContentProps = {
  uri: string;
};

type RemotePageResponse = {
  content: string;
};

const RemoteContent = ({ uri }: RemoteContentProps) => {
  const [mounted, setMounted] = useState(false);
  const [aboutContent, setAboutContent] = useState<string>("");

  const getAboutContent = useCallback(async () => {
    const {
      data: { content },
    } = await axios<RemotePageResponse>(uri);

    setAboutContent(content);
  }, []);

  useEffect(() => {
    getAboutContent().catch(console.error);
    setMounted(true);
  }, [getAboutContent]);

  return <Fragment>{mounted ? aboutContent : <Loader2 className="animate-spin" />} </Fragment>;
};

export { RemoteContent };
