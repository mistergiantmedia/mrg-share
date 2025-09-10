import {
  Button,
  Container,
  createStyles,
  Group,
  List,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TbCheck } from "react-icons/tb";
import { FormattedMessage } from "react-intl";
import Logo from "../components/Logo";
import Meta from "../components/Meta";
import useUser from "../hooks/user.hook";
import useConfig from "../hooks/config.hook";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.md} * 4)`,
    paddingBottom: `calc(${theme.spacing.md} * 4)`,
  },

  content: {
    maxWidth: 480,
    marginRight: `calc(${theme.spacing.md} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export default function Home() {
  const { classes } = useStyles();
  const { refreshUser } = useUser();
  const router = useRouter();
  const config = useConfig();
  const [signupEnabled, setSignupEnabled] = useState(true);

  // If user is already authenticated, redirect to the upload page
  useEffect(() => {
    refreshUser().then((user) => {
      if (user) {
        router.replace("/upload");
      }
    });

    // If registration is disabled, get started button should redirect to the sign in page
    try {
      const allowRegistration = config.get("share.allowRegistration");
      setSignupEnabled(allowRegistration !== false);
    } catch (error) {
      setSignupEnabled(true);
    }
  }, [config]);

  const getButtonHref = () => {
    return signupEnabled ? "/auth/signUp" : "/auth/signIn";
  };

  return (
    <>
      <Meta title="Home" />
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <FormattedMessage
                id="home.title"
                values={{
                  h: (chunks) => (
                    <span className={classes.highlight}>{chunks}</span>
                  ),
                }}
              />
            </Title>
            <Text color="dimmed" mt="md">
              <FormattedMessage id="home.description" />
            </Text>

            <Group mt={30}>
              <Button
                component={Link}
                href={getButtonHref()}
                radius="xl"
                size="md"
                className={classes.control}
              >
                <FormattedMessage id="home.button.start" />
              </Button>
              <Button
                component={Link}
                href="http://share.mrg.rocks/upload/2d71116b-3120-4fbb-b0c8-7a2de2a204df"
                target="_blank"
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Upload to Mister Giant
              </Button>
            </Group>
          </div>
          <Group className={classes.image} align="center">
            <Logo height={200} height={283} />
          </Group>
        </div>
      </Container>
    </>
  );
}
