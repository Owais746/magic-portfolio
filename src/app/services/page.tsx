import { Column, Heading, Meta, Schema, Text, Row, Icon } from "@once-ui-system/core";
import { baseURL, about, person, services } from "@/resources";

export async function generateMetadata() {
    return Meta.generate({
        title: services.title,
        description: services.description,
        baseURL: baseURL,
        image: `/api/og/generate?title=${encodeURIComponent(services.title)}`,
        path: services.path,
    });
}

export default function Services() {
    const serviceItems = [
        {
            title: "Web Development",
            description: "High-performance websites with MERN and Next.js.",
            icon: "code",
        },
        {
            title: "UI/UX Design",
            description: "Clean, user-first interfaces with prototypes and mockups.",
            icon: "layout",
        },
        {
            title: "Graphic Design",
            description: "Branding, logos, and marketing assets (Adobe, Figma).",
            icon: "penTool",
        },
        {
            title: "Chatbots",
            description: "AI-powered chatbots for customer support and automation.",
            icon: "chatBubble",
        },
        {
            title: "Fine tuning",
            description: "Customize AI models for specific use cases.",
            icon: "chatBubble",
        },
        {
            title: "SEO Optimization",
            description: "Improve rankings, handle traffic bursts, and boost speed.",
            icon: "search",
        },
        {
            title: "n8n Automations",
            description: "Advanced workflow automation for businesses.",
            icon: "settings",
        },
        {
            title: "Agentic AI (Learning)",
            description: "Design autonomous AI agents for workflows and decisions.",
            icon: "terminal",
        },
        {
            title: "Python Development",
            description: "Automation scripts, backend logic, and data handling.",
            icon: "code",
        },
        {
            title: "CMS Development",
            description: "WordPress and headless CMS integrations.",
            icon: "book",
        },
    ];

    return (
        <Column maxWidth="m" paddingTop="24" paddingX="l" gap="xl">
            <Schema
                as="webPage"
                baseURL={baseURL}
                path={services.path}
                title={services.title}
                description={services.description}
                image={`/api/og/generate?title=${encodeURIComponent(services.title)}`}
                author={{
                    name: person.name,
                    url: `${baseURL}${about.path}`,
                    image: `${baseURL}${person.avatar}`,
                }}
            />

            <Column horizontal="center" gap="16" marginBottom="xl">
                <Heading variant="display-strong-xl" align="center">
                    Services
                </Heading>
                <Text variant="display-default-xs" onBackground="neutral-weak" align="center" style={{ maxWidth: '700px' }}>
                    I offer comprehensive web development and automation services that help businesses scale and optimize their workflows.
                </Text>
            </Column>

            <Column fillWidth gap="m" marginBottom="128">
                {serviceItems.map((service, index) => (
                    <Row
                        key={index}
                        fillWidth
                        padding="32"
                        gap="24"
                        border="neutral-alpha-medium"
                        background="surface"
                        radius="l"
                        vertical="center"
                        s={{ direction: "column", align: "start", padding: "24", gap: "16" }}
                    >
                        <Row
                            width="64"
                            height="64"
                            background="brand-alpha-weak"
                            radius="full"
                            horizontal="center"
                            vertical="center"
                            s={{ width: "48", height: "48" }}
                        >
                            <Icon name={service.icon} size="m" onBackground="brand-strong" />
                        </Row>
                        <Column gap="8" flex={1}>
                            <Heading as="h3" variant="heading-strong-xl">
                                {service.title}
                            </Heading>
                            <Text variant="body-default-l" onBackground="neutral-weak">
                                {service.description}
                            </Text>
                        </Column>
                    </Row>
                ))}
            </Column>
        </Column>
    );
}
