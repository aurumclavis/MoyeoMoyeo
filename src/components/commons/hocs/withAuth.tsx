import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/store";

export const WithAuth = (Component: any) => (props: any) => {
  const Loadable = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const router = useRouter();

  useEffect(() => {
    Loadable.toPromise().then((newAccessToken) => {
      if (!newAccessToken) {
        alert("로그인 후 이용 가능합니다");
        router.push("/login");
      }
    });
  }, []);
  return <Component {...props} />;
};
