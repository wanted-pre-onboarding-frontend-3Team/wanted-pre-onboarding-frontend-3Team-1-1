export const useMount = (on_mount) => {
  const is_mount = useRef(false);
  const mount_count = useRef(0);

  const isMount = useCallback(() => {
    return is_mount.current;
  }, []);

  useEffect(() => {
    is_mount.current = true;
    mount_count.current = mount_count.current + 1;

    if (mount_count.current === 1) {
      on_mount && on_mount();
    }

    return () => {
      is_mount.current = false;
    };
  }, [on_mount]);

  return [isMount];
};
