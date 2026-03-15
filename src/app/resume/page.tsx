import { Column, Heading, Meta, Schema, Text, Row, Button } from "@once-ui-system/core";
import { baseURL, about, person, resume } from "@/resources";

export async function generateMetadata() {
    return Meta.generate({
        title: resume.title,
        description: resume.description,
        baseURL: baseURL,
        image: `/api/og/generate?title=${encodeURIComponent(resume.title)}`,
        path: resume.path,
    });
}

export default function Resume() {
    return (
        <Column maxWidth="m" paddingTop="24" paddingX="l" gap="xl">
            <Schema
                as="webPage"
                baseURL={baseURL}
                path={resume.path}
                title={resume.title}
                description={resume.description}
                image={`/api/og/generate?title=${encodeURIComponent(resume.title)}`}
                author={{
                    name: person.name,
                    url: `${baseURL}${about.path}`,
                    image: `${baseURL}${person.avatar}`,
                }}
            />

            <Column fillWidth horizontal="center" marginBottom="l">
                <Heading variant="display-strong-xl" align="center">
                    Muhammad Owais Anwer
                </Heading>
                <br />
                <Text variant="display-default-xs" onBackground="neutral-weak">
                    Full Stack Developer & Agentic AI Developer
                </Text>
            </Column>

            <Column fillWidth gap="l">
                <Heading as="h2" variant="display-strong-s" marginBottom="m">
                    Summary
                </Heading>
                <Text variant="body-default-l" onBackground="neutral-strong">
                    Self-driven Full Stack Developer specializing in the MERN stack, Python automation, and cloud deployments. Experienced in scalable APIs, real-time apps, and automation workflows (n8n, Agentic AI).
                </Text>
                <Column as="ul" paddingLeft="24" gap="8" marginTop="16">
                    <Text as="li" variant="body-default-m">Korangi 1, Nasir Colony, Karachi</Text>
                    <Text as="li" variant="body-default-m">+92 337 8099063</Text>
                    <Text as="li" variant="body-default-m">mrowaisno30@gmail.com</Text>
                </Column>
            </Column>

            <Column fillWidth gap="l" marginTop="xl">
                <Heading as="h2" variant="display-strong-s" marginBottom="m">
                    Professional Experience
                </Heading>

                <Column fillWidth gap="12" marginBottom="l">
                    <Row fillWidth horizontal="between" vertical="end">
                        <Text variant="heading-strong-l">Freelance Web Developer</Text>
                        <Text variant="heading-default-xs" onBackground="neutral-weak">Jan 2023 – Present</Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak">Remote</Text>
                    <Column as="ul" gap="16" paddingLeft="24" paddingTop="16">
                        <Text as="li" variant="body-default-m">Delivered 9+ client projects with focus on SEO, performance, and scalability.</Text>
                        <Text as="li" variant="body-default-m">Built comprehensive full-stack ecommerce platform (Scatch) with MERN stack, featuring user authentication, cart management, order processing, and admin panel.</Text>
                        <Text as="li" variant="body-default-m">Implemented serverless deployment strategies using Vercel with MongoDB Atlas integration.</Text>
                        <Text as="li" variant="body-default-m">Built automation workflows in n8n, reducing manual tasks for clients.</Text>
                        <Text as="li" variant="body-default-m">Worked with international clients including Dubai-based businesses.</Text>
                    </Column>
                </Column>

                <Column fillWidth gap="12" marginBottom="l">
                    <Row fillWidth horizontal="between" vertical="end">
                        <Text variant="heading-strong-l">IT Support Specialist</Text>
                        <Text variant="heading-default-xs" onBackground="neutral-weak">2021 – 2022</Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak">Karachi (Part-time)</Text>
                    <Column as="ul" gap="16" paddingLeft="24" paddingTop="16">
                        <Text as="li" variant="body-default-m">Resolved 50+ hardware/software issues monthly.</Text>
                        <Text as="li" variant="body-default-m">Automated diagnostics with Python, reducing troubleshooting time by 40%.</Text>
                        <Text as="li" variant="body-default-m">Improved uptime and supported multiple software platforms.</Text>
                    </Column>
                </Column>
            </Column>

            <Column fillWidth gap="l" marginTop="xl">
                <Heading as="h2" variant="display-strong-s" marginBottom="m">
                    Education
                </Heading>

                <Column fillWidth gap="8" marginBottom="l">
                    <Text variant="heading-strong-l">Intermediate in Commerce</Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">Expected 2025 | Superior College, Karachi</Text>
                    <Text variant="body-default-m" marginTop="8">Alongside Commerce studies, pursuing web development, Python, n8n automations, and Agentic AI.</Text>
                </Column>

                <Column fillWidth gap="8" marginBottom="l">
                    <Text variant="heading-strong-l">Matriculation</Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">2022 - 2024 | National Public School</Text>
                    <Text variant="body-default-m" marginTop="8">Aspiring web developer with a strong interest in technology, developed early during my education at National School. Passionate about building responsive websites and eager to grow through real-world projects in an internship or junior developer role.</Text>
                </Column>
            </Column>

            <Row horizontal="center" marginTop="48" marginBottom="128">
                <Button href="/Muhammad_Owais_CV_Final.pdf" variant="secondary" size="l" prefixIcon="download">
                    Download Resume
                </Button>
            </Row>
        </Column>
    );
}
