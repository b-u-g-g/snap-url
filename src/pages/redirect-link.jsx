/*import {storeClicks} from "@/db/apiClicks";
import {getLongUrl} from "@/db/apiUrls";
import useFetch from "@/hooks/use-fetch";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {BarLoader} from "react-spinners";

const RedirectLink = () => {
  const {id} = useParams();

  const {loading, data, fn} = useFetch(getLongUrl, id);

  const {loading: loadingStats, fn: fnStats} = useFetch(storeClicks, {
    id: data?.id,
    originalUrl: data?.original_url,
  });

  useEffect(() => {
    fn();
  }, []);

  useEffect(() => {
    if (!loading && data) {
      fnStats();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  if (loading || loadingStats) {
    return (
      <>
        <BarLoader width={"100%"} color="#36d7b7" />
        <br />
        Redirecting...
      </>
    );
  }

  return null;
};

export default RedirectLink;
*/

/*import {storeClicks} from "@/db/apiClicks";
import {getLongUrl} from "@/db/apiUrls";
import useFetch from "@/hooks/use-fetch";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {BarLoader} from "react-spinners";

const RedirectLink = () => {
  const {id} = useParams();

  const {loading, data, fn} = useFetch(getLongUrl, id);

  const {loading: loadingStats, fn: fnStats} = useFetch(storeClicks, {
    id: data?.id,
    originalUrl: data?.original_url,
  });

  useEffect(() => {
    fn();
  }, []);

  useEffect(() => {
    if (!loading && data) {
      fnStats();

      // ✅ Added: Delay redirect for 5 seconds to allow SEO indexing
      setTimeout(() => {
        window.location.href = data.original_url;
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  if (loading || loadingStats) {
    return (
      <>
        <BarLoader width={"100%"} color="#36d7b7" />
        <br />
        Redirecting...
      </>
    );
  }

  // ✅ Added: Return SEO-friendly content before redirect
  return (
    <>
      <head>
        <title>Redirecting to {data.original_url}</title>
        <meta name="description" content={`Redirecting to ${data.original_url}`} />
        <meta name="robots" content="index, follow" />
      </head>
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-xl font-bold mb-2">You’re being redirected...</h1>
        <p className="mb-2">You’ll be redirected to:</p>
        <a
          href={data.original_url}
          className="text-blue-500 underline break-all"
        >
          {data.original_url}
        </a>
        <p className="mt-4 text-sm text-gray-500">Redirecting in 5 seconds...</p>
      </div>
    </>
  );
};

export default RedirectLink;
*/
import {storeClicks} from "@/db/apiClicks";
import {getLongUrl} from "@/db/apiUrls";
import useFetch from "@/hooks/use-fetch";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {BarLoader} from "react-spinners";

const RedirectLink = () => {
  const {id} = useParams();

  const {loading, data, fn} = useFetch(getLongUrl, id);

  const {loading: loadingStats, fn: fnStats} = useFetch(storeClicks, {
    id: data?.id,
    originalUrl: data?.original_url,
  });

  useEffect(() => {
    fn();
  }, []);

  useEffect(() => {
    if (!loading && data) {
      fnStats();

      // ✅ Added: Delay redirect for 5 seconds to allow SEO indexing
      setTimeout(() => {
        window.location.href = data.original_url;
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  // ✅ Fix: prevent crash when data is null
  if (loading || loadingStats || !data) {
    return (
      <>
        <BarLoader width={"100%"} color="#36d7b7" />
        <br />
        Redirecting...
      </>
    );
  }

  // ✅ Return SEO-friendly content before redirect
  return (
    <>
      <head>
        <title>Redirecting to {data.original_url}</title>
        <meta name="description" content={`Redirecting to ${data.original_url}`} />
        <meta name="robots" content="index, follow" />
      </head>
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-xl font-bold mb-2">You’re being redirected...</h1>
        <p className="mb-2">You’ll be redirected to:</p>
        <a
          href={data.original_url}
          className="text-blue-500 underline break-all"
        >
          {data.original_url}
        </a>
        <p className="mt-4 text-sm text-gray-500">Redirecting in 5 seconds...</p>
      </div>
    </>
  );
};

export default RedirectLink;

